export const revalidate = 3600;

type CrochetPhoto = {
  id: number;
  medium2_url: string;
};

type CrochetProject = {
  id: number;
  name: string;
  made_for: string;
  permalink: string;
  first_photo?: CrochetPhoto;
  status_name: string;
  completed: string;
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

async function fetchProjects(): Promise<CrochetProject[]> {
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
          next: { revalidate: 3600 },
        }
      ).then((r) => r.json())
  );

  return res.projects;
}

export default async function CrochetPage() {
  const projects = await fetchProjects();

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

      {/* break out of page layout padding */}
      <div className="mx-[-24px] flex flex-wrap">
        {projects.map((project) => {
          if (!project.first_photo) return null;

          return (
            <div
              key={project.id}
              className="shrink-0 grow-0 aspect-square relative w-[50%] md:w-[33%] lg:w-[25%] xl:w-[20%]"
            >
              <div className="absolute inset-[22px] flex flex-col justify-center items-center">
                <img
                  className="block max-w-[100%] max-h-[100%]"
                  src={project.first_photo.medium2_url}
                  alt={project.name}
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
