import React from "react";

import { PhotoGrid, PhotoGridItem } from "../lib/PhotoGrid";

const DRAWINGS: PhotoGridItem[] = [
  {
    photo: "https://content.klve.nl/drawings/IMG_20211004_083542.s350.jpg",
    src: "https://content.klve.nl/drawings/IMG_20211004_083542.jpg",
    w: 3000,
    h: 4000,
  },
  {
    photo: "https://content.klve.nl/drawings/IMG_20211004_083625.s350.jpg",
    src: "https://content.klve.nl/drawings/IMG_20211004_083625.jpg",
    w: 3000,
    h: 4000,
  },
  {
    photo:
      "https://content.klve.nl/drawings/flickr-kaisers0ze-5707934827.s350.jpg",
    src: "https://content.klve.nl/drawings/flickr-kaisers0ze-5707934827.jpg",
    w: 1000,
    h: 1420,
    title: `From <a className="link" href="https://www.flickr.com/photos/kaisers0ze/5707934827/">this photo</a>`,
  },
  {
    photo:
      "https://content.klve.nl/drawings/flickr-wesdobbs-4011457449.s350.jpg",
    src: "https://content.klve.nl/drawings/flickr-wesdobbs-4011457449.jpg",
    w: 1317,
    h: 1000,
    title: `From <a className="link" href="https://www.flickr.com/photos/wesdobbs/4011457449/">this photo</a>`,
  },
  {
    photo: "https://content.klve.nl/drawings/dana_scott.s350.jpg",
    src: "https://content.klve.nl/drawings/dana_scott.jpg",
    w: 1500,
    h: 1125,
  },
  {
    photo: "https://content.klve.nl/drawings/live-2013-09-06-sofie.s350.jpg",
    src: "https://content.klve.nl/drawings/live-2013-09-06-sofie.jpg",
    w: 1054,
    h: 1500,
  },
  {
    photo: "https://content.klve.nl/drawings/spr-hg-00-013090314160.s350.jpg",
    src: "https://content.klve.nl/drawings/spr-hg-00-013090314160.jpg",
    w: 1500,
    h: 1258,
  },
  {
    photo: "https://content.klve.nl/drawings/IMG_20211004_083524.s350.jpg",
    src: "https://content.klve.nl/drawings/IMG_20211004_083524.jpg",
    w: 4000,
    h: 3000,
  },
  {
    photo: "https://content.klve.nl/drawings/lisa.s350.jpg",
    src: "https://content.klve.nl/drawings/lisa.jpg",
    w: 2000,
    h: 1333,
  },
  {
    photo: "https://content.klve.nl/drawings/nikki.s350.jpg",
    src: "https://content.klve.nl/drawings/nikki.jpg",
    w: 1500,
    h: 1060,
  },
  {
    photo: "https://content.klve.nl/drawings/img_0179.s350.jpg",
    src: "https://content.klve.nl/drawings/img_0179.jpg",
    w: 1500,
    h: 1914,
  },
];

export default function Drawings() {
  return (
    <section className="relative mt-[60px] md:mt-[100px]">
      <div className="wrap">
        <h1>Drawings</h1>
      </div>
      <PhotoGrid items={DRAWINGS} />
    </section>
  );
}
