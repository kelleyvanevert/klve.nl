import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { styled } from "linaria/react";

import { PhotoGridSwipe } from "../../lib/PhotoGrid";
import { photoCats, PhotoCat } from "../../lib/photos";

type Props = {
  cat: PhotoCat;
};

export const getStaticProps: GetStaticProps<
  Props,
  { category: string }
> = async ({ params }) => {
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
            <GoBack>
              <Link href="/photography">
                <a>
                  <i />
                </a>
              </Link>
            </GoBack>
            {cat.title}
          </strong>
        </h1>
      </div>
      <PhotoGridSwipe items={cat.images} />
    </section>
  );
}

const GoBack = styled.span`
  position: absolute;
  display: block;
  left: -40px;
  top: 1px;
  color: #000;

  a {
    position: relative;
    display: block;
    text-decoration: none;
    text-transform: lowercase;

    font-size: 28px;
    color: #000;

    width: 30px;
    text-align: center;

    &:after {
      display: none;
    }
  }

  a i {
    display: block;
    font-style: normal;
    position: relative;
    top: -1px;
  }

  a i:after {
    content: "⟨";
  }
`;
