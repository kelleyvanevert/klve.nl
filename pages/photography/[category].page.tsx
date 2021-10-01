import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import { PhotoGridSwipe } from "../../lib/PhotoGrid";
import { photoCats, PhotoCat } from "../../lib/photos";

import styles from "./GoBack.module.css";

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
          <strong>
            <span className="absolute block left-[-40px] top-[1px] text-black">
              <Link href="/photography">
                <a className={styles.goback}>⟨</a>
              </Link>
            </span>
            {cat.title}
          </strong>
        </h1>
      </div>
      <PhotoGridSwipe items={cat.images} />
    </section>
  );
}
