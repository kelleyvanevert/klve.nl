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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://api.ravelry.com/projects/kellleyvanevert//list.json?sort=status&page_size=50",
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.RAVELRY_PERSONAL_AUTH!
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());

  const { projects } = res;

  return {
    props: {
      projects,
    },
  };
};

export default function Crochet({ projects }: Props) {
  return (
    <section className="relative mt-[100px]">
      <div className="wrap">
        <h1>Crochet</h1>
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
                {!!project.made_for.trim() && (
                  <p className="mt-1 m-0 italic">For {project.made_for}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
