import "styled-components/macro";
import React from "react";

import PhotoGrid from "~/components/PhotoGrid";

import { photoCats } from "./data";

export default function Photography() {
  return (
    <article className="wrap">
      <h1 css="display: none;">Photography</h1>
      <p className="sub">(Select category to see more photos.)</p>
      <PhotoGrid.Nav
        items={Object.entries(photoCats).map(([key, cat]) => ({
          ...cat,
          to: `/photography/${key}`
        }))}
      />
    </article>
  );
}
