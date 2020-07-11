import styled from "styled-components/macro";
import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";

import PhotoGrid from "web/components/PhotoGrid";

import { photoCats } from "./data";

export default function PhotoCategory() {
  const { category: key = "" } = useParams();

  if (!photoCats[key]) {
    return <Redirect to="/photography" />;
  }

  const cat = photoCats[key];

  return (
    <section>
      <div className="wrap">
        <h1>
          <strong>
            <GoBack>
              <Link to="/photography">
                <i />
              </Link>
            </GoBack>
            {cat.title}
          </strong>
        </h1>
      </div>
      <PhotoGrid.Swipe items={cat.images} />
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
