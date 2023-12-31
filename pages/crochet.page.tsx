import React from "react";
import { GetStaticProps } from "next";

type CrochetPhoto = {
  id: number;
  medium2_url: string;
  // ...and more
};

type CrochetProject = {
  id: number;
  name: string; // personally formatted as "N. <name>"
  made_for: string;
  permalink: string;
  first_photo?: CrochetPhoto;
  status_name: string; // e.g. "Finished"
  completed: string; // YYYY/MM/DD (?)
  // ...and more
};

type Props = {
  projects: CrochetProject[];
};

async function retry<T>(f: () => Promise<T>, max = 3): Promise<T> {
  try {
    return await f();
  } catch (error) {
    if (max === 0) {
      console.error("Max retries reached => bail");
      throw error;
    }
    console.warn("Failed => retry again in 100ms");
    await new Promise((r) => setTimeout(r, 100));
    return await retry(f, max - 1);
  }
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await retry(
    async () =>
      await fetch(
        "https://api.ravelry.com/projects/kellleyvanevert/list.json?sort=status&page_size=50",
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${Buffer.from(
              process.env.RAVELRY_PERSONAL_AUTH!
            ).toString("base64")}`,
          },
        }
      ).then((r) => r.json())
  );

  const { projects } = res;

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60, // at most once every hour
  };
};

export default function Crochet({ projects }: Props) {
  return (
    <section className="relative mt-[60px] md:mt-[100px]">
      <div className="wrap">
        <h1>Crochet</h1>
        <p className="relative text-center top-[-30px]">
          You can find more pics and stuff at my{" "}
          <a
            className="link"
            href="https://www.ravelry.com/projects/kellleyvanevert"
          >
            Ravelry
          </a>{" "}
          account :)
        </p>
      </div>

      {/* break out off page layout padding */}
      <div className="mx-[-24px] flex flex-wrap">
        {projects.map((project) => {
          if (!project.first_photo) return;

          return (
            <div
              key={project.id}
              className="shrink-0 grow-0 aspect-square relative w-[50%] md:w-[33%] lg:w-[25%] xl:w-[20%]"
            >
              <div className="absolute inset-[22px] flex flex-col justify-center items-center">
                <img
                  className="block max-w-[100%] max-h-[100%]"
                  src={project.first_photo?.medium2_url}
                />
                {!!project.name.trim() && (
                  <p className="mt-1 m-0 italic">{project.name}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
