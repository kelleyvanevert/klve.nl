import React from "react";
import { styled } from "linaria/react";

import { PhotoGridNav } from "../../lib/PhotoGrid";

import { photoCats } from "../../lib/photos";

export default function Photography() {
  return (
    <section className="wrap">
      <h1 style={{ display: "none" }}>Photography</h1>
      <Sub>(Select category to see more photos.)</Sub>
      <PhotoGridNav
        items={Object.entries(photoCats).map(([key, cat]) => ({
          ...cat,
          to: `/photography/${key}`,
        }))}
      />
    </section>
  );
}

const Sub = styled.p`
  position: relative;
  top: -30px;
  text-align: center;
`;
