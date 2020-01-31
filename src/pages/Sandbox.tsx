import React from "react";

import { CONTENT_BASE } from "~/config";

export default function Sandbox() {
  return (
    <article className="wrap">
      <h1>[Mostly digital] projects & experiments</h1>

      <ul>
        <li>
          Visualizing JS execution through a meta-syntactic transform (
          <a
            href="https://js-visualized-v2.netlify.com/"
            rel="noopener noreferrer"
          >
            js sketch
          </a>
          )
        </li>
        <li>
          A visual guide to formulating an SQL query (
          <a href="https://codaisseur.github.io/visualized-sql/">
            js sketch + cheat sheet
          </a>
          )
        </li>
        <li>
          JavaScript execution stepper / runtime visualizer (
          <a
            href="https://visualized-execution.js.org/"
            rel="noopener noreferrer"
          >
            js sketch
          </a>
          ) -- <em>WORK IN PROGRESS</em>
        </li>
        <li>
          The <em>Scopes</em> programming language (
          <a href="https://scopes.js.org/" rel="noopener noreferrer">
            tentative idea
          </a>
          ) -- <em>WORK IN PROGRESS</em>
        </li>
        <li>
          Literal JSX: an idea (
          <a href="https://literal-jsx.org/" rel="noopener noreferrer">
            website
          </a>
          ) and an example parser implementation (
          <a
            href="https://www.npmjs.com/package/@literal-jsx/parser"
            rel="noopener noreferrer"
          >
            npm package
          </a>
          )
        </li>
        <li>
          A visual explorer tool for querying Babel-produced ASTs with JSPath (
          <a
            href="https://kelleyvanevert.github.io/jspath-for-ast-querying/"
            rel="noopener noreferrer"
          >
            js sketch
          </a>
          )
        </li>
        <li>
          brug{" "}
          <a href="https://brugfilm.nl/" rel="noopener noreferrer">
            (short film)
          </a>
        </li>
        <li>
          SVG arcs (
          <a
            href={`${CONTENT_BASE}/scratch/svg-arcs/`}
            rel="noopener noreferrer"
          >
            js sketch
          </a>
          )
        </li>
        <li>
          Kabouter Wesley speech balloons (
          <a
            href={`${CONTENT_BASE}/scratch/kabouter_wesley/`}
            rel="noopener noreferrer"
          >
            js sketch
          </a>
          )
        </li>
        <li>
          Tiling butterflies to get a Dragon's Egg origami model (
          <a
            href={`${CONTENT_BASE}/scratch/butterflies/`}
            rel="noopener noreferrer"
          >
            js sketch
          </a>
          )
        </li>
        <li>
          <a
            href="https://bl.ocks.org/kelleyvanevert"
            rel="noopener noreferrer"
          >
            D3 blocks
          </a>{" "}
          and{" "}
          <a
            href="https://beta.observablehq.com/@kelleyvanevert"
            rel="noopener noreferrer"
          >
            Observable notebooks
          </a>
        </li>
        <li>
          Learn some Arabic words (
          <a href={`${CONTENT_BASE}/scratch/arabic/`} rel="noopener noreferrer">
            js sketch
          </a>{" "}
          resp.{" "}
          <a
            href="https://play.google.com/store/apps/details?id=nl.kelleyvanevert.arabic"
            rel="noopener noreferrer"
          >
            android app
          </a>
          )
        </li>
        <li>
          Go on a Torus (
          <a
            href={`${CONTENT_BASE}/scratch/go_torus/`}
            rel="noopener noreferrer"
          >
            js sketch
          </a>
          )
        </li>
        <li>
          Fastmail+, a quick &amp; dirty web extension to add labels to Fastmail
          conversations (
          <a
            href="https://github.com/kelleyvanevert/fastmail-plus"
            rel="noopener noreferrer"
          >
            github repo
          </a>{" "}
          /{" "}
          <a
            href={`${CONTENT_BASE}/scratch/fastmail-0.1-an+fx.xpi`}
            rel="noopener noreferrer"
          >
            firefox extension file
          </a>
          )
        </li>
        <li>
          UBN redirecter, a quick &amp; dirty web extension to nagivate to the
          Radboud University's access page of a journal article (
          <a
            href={`${CONTENT_BASE}/scratch/ubn_bookmarklet-0.1-an+fx.xpi`}
            rel="noopener noreferrer"
          >
            firefox extension file
          </a>
          )
        </li>
        <li>
          Minimalist Go made with Vue.js (
          <a href={`${CONTENT_BASE}/scratch/vue-go/`} rel="noopener noreferrer">
            js sketch
          </a>
          )
        </li>
        <li>
          Ridiculous CSS 3D transforms (
          <a href={`${CONTENT_BASE}/scratch/css3d/`} rel="noopener noreferrer">
            js sketch
          </a>
          )
        </li>
        <li>
          Loesje poster design studio (
          <a href={`${CONTENT_BASE}/scratch/loesje/`} rel="noopener noreferrer">
            js app
          </a>
          )
        </li>
        <li>
          Debating tournament tabulation app (
          <a
            href={`${CONTENT_BASE}/scratch/debating/public/`}
            rel="noopener noreferrer"
          >
            js app
          </a>
          )
        </li>
        <li>
          Extendable table (
          <a
            href={`${CONTENT_BASE}/scratch/cyril_tafel/`}
            rel="noopener noreferrer"
          >
            js plan sketch
          </a>{" "}
          /{" "}
          <a
            href="http://cyrcle.nl/portfolio/uitbreidbare-tafel/"
            rel="noopener noreferrer"
          >
            docu
          </a>
          )
        </li>
        <li>
          Origami Pixels (
          <a
            href={`${CONTENT_BASE}/scratch/cyril_origami_pixels/`}
            rel="noopener noreferrer"
          >
            js sketch
          </a>{" "}
          /{" "}
          <a
            href="https://play.google.com/store/apps/details?id=nl.kelleyvanevert.origamipixels"
            rel="noopener noreferrer"
          >
            android app
          </a>
          )
        </li>
        <li>
          Perry's 16 -- an old card game like solitaire (
          <a
            href="https://play.google.com/store/apps/details?id=nl.kelleyvanevert.perry16"
            rel="noopener noreferrer"
          >
            android app
          </a>
          )
        </li>
        <li>
          Boids (
          <a href={`${CONTENT_BASE}/scratch/boids/`} rel="noopener noreferrer">
            js sketch
          </a>
          )
        </li>
      </ul>
    </article>
  );
}
