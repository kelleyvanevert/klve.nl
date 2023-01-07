import Link from "next/link";
import { photoCats } from "../../lib/photos";

export default function Photography() {
  return (
    <section className="wrap">
      <h1 className="hidden">Photography</h1>
      <p className="relative top-[-30px]">
        I used to photograph a lot, and here's a little overview of some of the
        stuff I produced, per genre.
      </p>
      <div className="flex justify-between flex-wrap">
        {Object.entries(photoCats).map(([key, cat]) => {
          return (
            <div
              key={key}
              className="shrink-0 max-md:w-[50%] flex justify-center py-6"
            >
              <Link href={`/photography/${key}`} className="block group">
                <div
                  className="h-[220px] aspect-[213/320] bg-cover bg-gray-200 group-focus:outline outline-2 outline-offset-2 outline-black"
                  style={{ backgroundImage: `url(${cat.photo})` }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
