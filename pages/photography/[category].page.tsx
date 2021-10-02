import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import { PhotoGridSwipe } from "../../lib/PhotoGrid";
import { photoCats, PhotoCat } from "../../lib/photos";

type Props = {
  cat: PhotoCat;
};

export const getStaticProps: GetStaticProps<Props, { category: string }> =
  async ({ params }) => {
    if (!params || !photoCats[params.category]) {
      return {
        notFound: true,
        props: {},
      };
    }

    return {
      props: {
        cat: photoCats[params.category],
      },
    };
  };

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(photoCats).map((slug) => {
    return `/photography/${slug}`;
  });

  return {
    fallback: false,
    paths,
  };
};

export default function PhotoCategory({ cat }: Props) {
  return (
    <section>
      <div className="wrap">
        <h1>
          <Link href="/photography">
            <a className="align-text-bottom inline-flex justify-center items-center mr-[16px] rotate-180 h-[24px] w-[24px] transition-transform hover:scale-110 active:scale-90">
              ➮
            </a>
          </Link>
          {cat.title}
        </h1>
      </div>
      <PhotoGridSwipe items={cat.images} />
    </section>
  );
}
