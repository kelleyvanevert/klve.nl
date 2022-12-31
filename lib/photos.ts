import mapValues from "lodash.mapvalues";

import { CONTENT_BASE } from "./config";
import { PhotoGridItem } from "./PhotoGrid";

export type PhotoCat = {
  title: string;
  photo: string;
  images: PhotoGridItem[];
};

export const photoCats: {
  [key: string]: PhotoCat;
} = mapValues(
  {
    portraiture: {
      title: "Portraiture",
      photo: "/s/photography/portraiture/s320/_MG_7811.jpg",
      images: [
        {
          photo: "/s/photography/portraiture/s320/_MG_5079.jpg",
          src: "/s/photography/portraiture/s1500/_MG_5079.jpg",
          w: 1500,
          h: 928,
        },
        {
          // varusa
          photo: "/s/photography/portraiture/s320/_MG_0156.jpg",
          src: "/s/photography/portraiture/s1500/_MG_0156.jpg",
          w: 997,
          h: 1500,
        },
        {
          photo: "/s/photography/portraiture/s320/_MG_7811.jpg",
          src: "/s/photography/portraiture/s1500/_MG_7811.jpg",
          w: 999,
          h: 1500,
        },
        {
          photo: "/s/photography/portraiture/s320/aaricia.jpg",
          src: "/s/photography/portraiture/s1500/aaricia.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/portraiture/s320/_MG_0765.jpg",
          src: "/s/photography/portraiture/s1500/_MG_0765.jpg",
          w: 999,
          h: 1500,
        },
        {
          photo: "/s/photography/portraiture/s320/_MG_3954_03.jpg",
          src: "/s/photography/portraiture/s1500/_MG_3954_03.jpg",
          w: 999,
          h: 1500,
        },
        {
          photo: "/s/photography/portraiture/s320/_MG_5882.jpg",
          src: "/s/photography/portraiture/s1500/_MG_5882.jpg",
          w: 999,
          h: 1500,
        },
        {
          photo: "/s/photography/portraiture/s320/_MG_6065.jpg",
          src: "/s/photography/portraiture/s1500/_MG_6065.jpg",
          w: 999,
          h: 1500,
        },
        {
          photo: "/s/photography/portraiture/s320/_MG_6103.jpg",
          src: "/s/photography/portraiture/s1500/_MG_6103.jpg",
          w: 999,
          h: 1500,
        },
        {
          // pieter
          photo: "/s/photography/portraiture/s320/_MG_6247.jpg",
          src: "/s/photography/portraiture/s1500/_MG_6247.jpg",
          w: 999,
          h: 1500,
        },
        {
          // julia
          photo: "/s/photography/portraiture/s320/_MG_0627.jpg",
          src: "/s/photography/portraiture/s1500/_MG_0627.jpg",
          w: 999,
          h: 1500,
        },
        {
          photo: "/s/photography/portraiture/s320/_MG_9176_02.jpg",
          src: "/s/photography/portraiture/s1500/_MG_9176_02.jpg",
          w: 999,
          h: 1500,
        },
        {
          photo: "/s/photography/portraiture/s320/_MG_4841_01_p.jpg",
          src: "/s/photography/portraiture/s1500/_MG_4841_01_p.jpg",
          w: 1000,
          h: 1500,
        },
        {
          photo: "/s/photography/portraiture/s320/_MG_6110.jpg",
          src: "/s/photography/portraiture/s1500/_MG_6110.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/portraiture/s320/DSCF09848.jpg",
          src: "/s/photography/portraiture/s1500/DSCF09848.jpg",
          w: 1000,
          h: 1500,
        },
      ],
    },
    wedding: {
      title: "Weddings",
      photo: "/s/photography/wedding/s320/_MG_8162.jpg",
      images: [
        {
          photo: "/s/photography/wedding/s320/_MG_7018.jpg",
          src: "/s/photography/wedding/s1500/_MG_7018.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/wedding/s320/_MG_7194.jpg",
          src: "/s/photography/wedding/s1500/_MG_7194.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/wedding/s320/_MG_7581.jpg",
          src: "/s/photography/wedding/s1500/_MG_7581.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/wedding/s320/_MG_8162.jpg",
          src: "/s/photography/wedding/s1500/_MG_8162.jpg",
          w: 999,
          h: 1500,
        },
        {
          photo: "/s/photography/wedding/s320/_MG_7886.jpg",
          src: "/s/photography/wedding/s1500/_MG_7886.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/wedding/s320/_MG_3931.jpg",
          src: "/s/photography/wedding/s1500/_MG_3931.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/wedding/s320/_MG_4173.jpg",
          src: "/s/photography/wedding/s1500/_MG_4173.jpg",
          w: 999,
          h: 1500,
        },
        {
          photo: "/s/photography/wedding/s320/_MG_3998.jpg",
          src: "/s/photography/wedding/s1500/_MG_3998.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/wedding/s320/_MG_4624.jpg",
          src: "/s/photography/wedding/s1500/_MG_4624.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/wedding/s320/_MG_4645.jpg",
          src: "/s/photography/wedding/s1500/_MG_4645.jpg",
          w: 1500,
          h: 999,
        },
      ],
    },
    fine: {
      title: "Fine art / personal",
      photo: "/s/photography/fine/s320/_MG_7478.jpg",
      images: [
        {
          photo: "/s/photography/fine/s320/_MG_0726.jpg",
          src: "/s/photography/fine/s1500/_MG_0726.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/fine/s320/_MG_0881.jpg",
          src: "/s/photography/fine/s1500/_MG_0881.jpg",
          w: 1500,
          h: 1000,
        },
        {
          photo: "/s/photography/fine/s320/_MG_2337.jpg",
          src: "/s/photography/fine/s1500/_MG_2337.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/fine/s320/IMG_6062.jpg",
          src: "/s/photography/fine/s1500/IMG_6062.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/fine/s320/_MG_7478.jpg",
          src: "/s/photography/fine/s1500/_MG_7478.jpg",
          w: 999,
          h: 1500,
        },
        {
          photo: "/s/photography/fine/s320/_MG_4825.jpg",
          src: "/s/photography/fine/s1500/_MG_4825.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/fine/s320/_MG_7552.jpg",
          src: "/s/photography/fine/s1500/_MG_7552.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/fine/s320/tumblr_mzxdlrnbXG1qahbj8o2_1280.jpg",
          src: "/s/photography/fine/tumblr_mzxdlrnbXG1qahbj8o2_1280.jpg",
          w: 1280,
          h: 850,
        },
        {
          photo: "/s/photography/fine/s320/tumblr_n1yjqu50aw1qahbj8o8_1280.jpg",
          src: "/s/photography/fine/tumblr_n1yjqu50aw1qahbj8o8_1280.jpg",
          w: 1280,
          h: 850,
        },
      ],
    },
    events: {
      title: "Events",
      photo: "/s/photography/_MG_2564-portrait.jpg",
      images: [
        {
          photo: "/s/photography/events/s320/IMG_6289.jpg",
          src: "/s/photography/events/s1500/IMG_6289.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_1585.jpg",
          src: "/s/photography/events/s1500/_MG_1585.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_1612.jpg",
          src: "/s/photography/events/s1500/_MG_1612.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_4033.jpg",
          src: "/s/photography/events/s1500/_MG_4033.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_3129.jpg",
          src: "/s/photography/events/s1500/_MG_3129.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_0874.jpg",
          src: "/s/photography/events/s1500/_MG_0874.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_3880.jpg",
          src: "/s/photography/events/s1500/_MG_3880.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/IMG_6392.jpg",
          src: "/s/photography/events/s1500/IMG_6392.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/IMG_6354.jpg",
          src: "/s/photography/events/s1500/IMG_6354.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_1101.jpg",
          src: "/s/photography/events/s1500/_MG_1101.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_6763.jpg",
          src: "/s/photography/events/s1500/_MG_6763.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_3469.jpg",
          src: "/s/photography/events/s1500/_MG_3469.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_1572.jpg",
          src: "/s/photography/events/s1500/_MG_1572.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_4326.jpg",
          src: "/s/photography/events/s1500/_MG_4326.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_4190.jpg",
          src: "/s/photography/events/s1500/_MG_4190.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_3419.jpg",
          src: "/s/photography/events/s1500/_MG_3419.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_1917.jpg",
          src: "/s/photography/events/s1500/_MG_1917.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_0051.jpg",
          src: "/s/photography/events/s1500/_MG_0051.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_7001.jpg",
          src: "/s/photography/events/s1500/_MG_7001.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_0643.jpg",
          src: "/s/photography/events/s1500/_MG_0643.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_2230.jpg",
          src: "/s/photography/events/s1500/_MG_2230.jpg",
          w: 1500,
          h: 998,
        },
        {
          photo: "/s/photography/events/s320/_MG_0682.jpg",
          src: "/s/photography/events/s1500/_MG_0682.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_0077.jpg",
          src: "/s/photography/events/s1500/_MG_0077.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_3947.jpg",
          src: "/s/photography/events/s1500/_MG_3947.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_0885.jpg",
          src: "/s/photography/events/s1500/_MG_0885.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_4844.jpg",
          src: "/s/photography/events/s1500/_MG_4844.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_4266.jpg",
          src: "/s/photography/events/s1500/_MG_4266.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_5699.jpg",
          src: "/s/photography/events/s1500/_MG_5699.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_4692.jpg",
          src: "/s/photography/events/s1500/_MG_4692.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_6884.jpg",
          src: "/s/photography/events/s1500/_MG_6884.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_0556.jpg",
          src: "/s/photography/events/s1500/_MG_0556.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_5615.jpg",
          src: "/s/photography/events/s1500/_MG_5615.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_2564.jpg",
          src: "/s/photography/events/s1500/_MG_2564.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_4108.jpg",
          src: "/s/photography/events/s1500/_MG_4108.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_2066.jpg",
          src: "/s/photography/events/s1500/_MG_2066.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_2572.jpg",
          src: "/s/photography/events/s1500/_MG_2572.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/IMG_6085.jpg",
          src: "/s/photography/events/s1500/IMG_6085.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_2152.jpg",
          src: "/s/photography/events/s1500/_MG_2152.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_3985.jpg",
          src: "/s/photography/events/s1500/_MG_3985.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_4087.jpg",
          src: "/s/photography/events/s1500/_MG_4087.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_2974.jpg",
          src: "/s/photography/events/s1500/_MG_2974.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_3068.jpg",
          src: "/s/photography/events/s1500/_MG_3068.jpg",
          w: 1500,
          h: 998,
        },
        {
          photo: "/s/photography/events/s320/_MG_0559.jpg",
          src: "/s/photography/events/s1500/_MG_0559.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_1209.jpg",
          src: "/s/photography/events/s1500/_MG_1209.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_3928.jpg",
          src: "/s/photography/events/s1500/_MG_3928.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_1051.jpg",
          src: "/s/photography/events/s1500/_MG_1051.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_4007.jpg",
          src: "/s/photography/events/s1500/_MG_4007.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_2077.jpg",
          src: "/s/photography/events/s1500/_MG_2077.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_1878.jpg",
          src: "/s/photography/events/s1500/_MG_1878.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_3792.jpg",
          src: "/s/photography/events/s1500/_MG_3792.jpg",
          w: 1500,
          h: 997,
        },
        {
          photo: "/s/photography/events/s320/_MG_2831.jpg",
          src: "/s/photography/events/s1500/_MG_2831.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_1985.jpg",
          src: "/s/photography/events/s1500/_MG_1985.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_2547.jpg",
          src: "/s/photography/events/s1500/_MG_2547.jpg",
          w: 1500,
          h: 999,
        },
        {
          photo: "/s/photography/events/s320/_MG_0570.jpg",
          src: "/s/photography/events/s1500/_MG_0570.jpg",
          w: 1500,
          h: 999,
        },
      ],
    },
  },
  (cat) => ({
    ...cat,
    photo: CONTENT_BASE + cat.photo,
    images: cat.images.map((im) => ({
      ...im,
      photo: CONTENT_BASE + im.photo,
      src: CONTENT_BASE + im.src,
    })),
  })
);
