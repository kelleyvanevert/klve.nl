import React from "react";

import { CONTENT_BASE } from "~/config";

export default function Sandbox() {
  return (
    <article className="wrap">
      <h1>[Mostly digital] projects &amp; experiments</h1>

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

      <h2 style={{ margin: "4rem auto 2rem", textAlign: "center" }}>
        Just a list of JavaScript stuff
      </h2>
      {/* <p>JavaScript related</p> */}
      <ul>
        <li>
          Creative: <a href="https://zzz.dog/">Zdog</a> |{" "}
          <a href="https://tonejs.github.io/">Tone.js</a> |{" "}
          <a href="https://github.com/veltman/flubber">flubber</a> |{" "}
          <a href="https://github.com/enkimute/ganja.js">ganja.js</a> |{" "}
          <a href="https://d3js.org/">D3</a> |{" "}
          <a href="https://observablehq.com/">Observable</a>
        </li>
        <li>
          Useful:{" "}
          <a href="https://www.npmjs.com/package/react-inspector">
            react-inspector
          </a>{" "}
          |{" "}
          <a href="https://github.com/berzniz/react-overdrive">
            react-overdrive
          </a>{" "}
          | <a href="https://github.com/OpenKieler/elkjs">ELK.js</a> |{" "}
          <a href="https://github.com/brillout/awesome-react-components">
            Awesome React
          </a>
        </li>
        <li>
          Resources: <a href="https://undraw.co/illustrations">unDraw</a>
        </li>
        <li>
          Rendering:{" "}
          <a href="https://github.com/react-spring/react-three-fiber">
            react-three-fiber
          </a>{" "}
          | <a href="https://github.com/vadimdemedes/ink">ink</a> |{" "}
          <a href="https://github.com/developit/htm">htm</a> |{" "}
          <a href="https://gl-react-cookbook.surge.sh/sdf1?menu=true">
            gl-react
          </a>{" "}
          |{" "}
          <a href="https://deck.gl/#/examples/core-layers/point-cloud-layer">
            deck.gl
          </a>{" "}
          (etc)
        </li>
        <li>
          Compiling: <a href="https://parceljs.org/">Parcel</a> |{" "}
          <a href="https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md">
            plugin handbook
          </a>{" "}
          |{" "}
          <a href="https://astexplorer.net/#/gist/3842e950f157f1c548f3db761447ee9c/latest">
            AST explorer
          </a>
        </li>
      </ul>
      {/* <p>Other</p>
      <ul>
        <li>
          <a href="http://www.vincentmeertens.com/project/timemaps/">
            TimeMaps
          </a>
        </li>
        <li>
          <a href="https://www.keene.edu/campus/maps/tool/">Polyline tool</a>
        </li>
      </ul> */}
    </article>
  );
}
