import { notFound } from "next/navigation";
import Link from "next/link";

import { PhotoGrid } from "lib/PhotoGrid";
import { photoCats } from "lib/photos";

export function generateStaticParams() {
  return Object.keys(photoCats).map((category) => ({ category }));
}

type Props = {
  params: Promise<{ category: string }>;
};

export default async function PhotoCategory({ params }: Props) {
  const { category } = await params;
  const cat = photoCats[category];

  if (!cat) {
    notFound();
  }

  return (
    <section className="relative mt-[60px] md:mt-[100px]">
      <div className="wrap">
        <h1>
          <Link
            href="/photography"
            className="align-text-bottom inline-flex justify-center items-center mr-[16px] rotate-180 h-[24px] w-[24px] transition-transform hover:scale-110 active:scale-90"
          >
            ➮
          </Link>
          {cat.title}
        </h1>
      </div>
      <PhotoGrid items={cat.images} />
    </section>
  );
}
