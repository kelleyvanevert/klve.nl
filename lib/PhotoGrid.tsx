import { useEffect, useRef } from "react";
// @ts-ignore
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export type PhotoGridItem = {
  photo: string;
  src: string;
  w: number;
  h: number;
  title?: string;
};

type Props = {
  items: PhotoGridItem[];
};

export function PhotoGrid({ items }: Props) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    let lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <>
      {/* break out off page layout padding */}
      <div ref={galleryRef} className="mx-[-24px] flex flex-wrap">
        {items.map((item) => {
          return (
            <div
              key={item.photo}
              className="shrink-0 grow-0 aspect-square cursor-pointer select-none relative w-[50%] md:w-[33%] lg:w-[25%] xl:w-[20%]"
            >
              {/* Just so that focusing is possible */}
              <a
                href={item.src}
                onClick={(e) => e.preventDefault()}
                data-pswp-width={item.w}
                data-pswp-height={item.h}
                className="group absolute inset-[22px] flex justify-center items-center"
              >
                <img
                  key={item.photo}
                  className="group-focus:outline outline-2 outline-offset-2 outline-black dark:outline-white block max-w-[100%] max-h-[100%]"
                  src={item.photo}
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
