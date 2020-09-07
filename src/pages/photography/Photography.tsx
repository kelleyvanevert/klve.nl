import styled from "styled-components/macro";
import React from "react";

import { PhotoGridNav } from "web/components/PhotoGrid";

import { photoCats } from "./data";

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
