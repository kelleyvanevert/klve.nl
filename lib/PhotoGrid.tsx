import "react-photoswipe-2/lib/photoswipe.css";
// @ts-ignore
import { PhotoSwipeGallery } from "react-photoswipe-2";

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

const options = {
  mainClass: "pswp--minimal--dark",
  barsSize: { top: 0, bottom: 0 },
  // captionEl: false,
  shareEl: false,
};

export function PhotoGrid({ items }: Props) {
  return (
    <>
      <style>{`
        .pswp-gallery {
          /* break out off page layout padding */
          margin: 0 -24px;
        }

        .pswp-thumbnails {
          display: flex;
          flex-wrap: wrap;
        }

        .pswp-thumbnail {
          flex-shrink: 0;
          flex-grow: 0;
          aspect-ratio: 1/1;
          cursor: pointer;
          user-select: none;
          position: relative;
          width: 20%;
        }

        @media (max-width: 1200px) {
          .pswp-thumbnail {
            width: 25%;
          }
        }

        @media (max-width: 960px) {
          .pswp-thumbnail {
            width: 33.3333%;
          }
        }

        @media (max-width: 600px) {
          .pswp-thumbnail {
            width: 50%;
          }
        }

        @media (max-width: 400px) {
          .pswp-thumbnail {
            width: 100%;
          }
        }
      `}</style>

      <PhotoSwipeGallery
        items={items}
        options={options}
        thumbnailContent={(item: PhotoGridItem) => {
          return (
            // Just so that focusing is possible
            <a
              href={item.src}
              onClick={(e) => e.preventDefault()}
              className="group absolute inset-[22px] flex justify-center items-center"
            >
              <img
                key={item.photo}
                className="group-focus:outline outline-2 outline-offset-2 outline-black block max-w-[100%] max-h-[100%]"
                src={item.photo}
              />
            </a>
          );
        }}
      />
    </>
  );
}
