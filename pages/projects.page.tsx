import React, { Fragment } from "react";
import { CONTENT_BASE } from "../lib/config";

const bookmarkSections = [
  {
    title: "JavaScript / web dev bookmarks",
    lists: [
      {
        title: "Creative/awesome",
        bookmarks: [
          { title: "Zdog", url: "https://zzz.dog/" },
          { title: "Tone.js", url: "https://tonejs.github.io/" },
          { title: "flubber", url: "https://github.com/veltman/flubber" },
          { title: "ganja.js", url: "https://github.com/enkimute/ganja.js" },
          { title: "D3", url: "https://d3js.org/" },
          { title: "Observable", url: "https://observablehq.com/" },
          { title: "Quadplay✜", url: "https://github.com/morgan3d/quadplay" },
          {
            title: "Functional WebGL",
            url: "https://github.com/regl-project/regl",
          },
          {
            title: "Two.js",
            url: "https://two.js.org/",
          },
          {
            title: "JSXGraph",
            url: "https://jsxgraph.uni-bayreuth.de/wp/",
          },
        ],
      },
      {
        title: "UI tech",
        bookmarks: [
          { title: "Alpine", url: "https://github.com/alpinejs/alpine" },
          { title: "Hyperapp", url: "https://hyperapp.dev/tutorial" },
          {
            title: "react-three-fiber",
            url: "https://github.com/react-spring/react-three-fiber",
          },
          { title: "ink", url: "https://github.com/vadimdemedes/ink" },
          { title: "htm", url: "https://github.com/developit/htm" },
          {
            title: "gl-react",
            url: "https://gl-react-cookbook.surge.sh/sdf1?menu=true",
          },
          {
            title: "deck.gl",
            url: "https://deck.gl/#/examples/core-layers/point-cloud-layer",
          },
          { title: "Parcel", url: "https://parceljs.org/" },
          {
            title: "AST explorer",
            url: "https://astexplorer.net/#/gist/3842e950f157f1c548f3db761447ee9c/latest",
          },
          { title: "createapp.dev", url: "https://createapp.dev/" },
          {
            title: "augmentor",
            url: "https://github.com/WebReflection/augmentor",
          },
        ],
      },
      {
        title: "Resources",
        bookmarks: [
          {
            title: "unDraw",
            url: "https://undraw.co/illustrations",
          },
          {
            title: "Awesome React",
            url: "https://github.com/brillout/awesome-react-components",
          },
          {
            title: "Babel plugin handbook",
            url: "https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md",
          },
        ],
      },
      {
        title: "Libraries",
        bookmarks: [
          {
            title: "react-inspector",
            url: "https://www.npmjs.com/package/react-inspector",
          },
          {
            title: "react-overdrive",
            url: "https://github.com/berzniz/react-overdrive",
          },
          { title: "ELK.js", url: "https://github.com/OpenKieler/elkjs" },
          { title: "Fluent", url: "https://www.projectfluent.org/" },
          {
            title: "React Color",
            url: "http://casesandberg.github.io/react-color/",
          },
        ],
      },
      {
        title: "Infrastructure",
        bookmarks: [
          { title: "Materialize", url: "https://materialize.io/" },
          { title: "Hasura", url: "https://hasura.io/" },
          { title: "Zapatos", url: "https://github.com/jawj/zapatos" },
        ],
      },
    ],
  },
  {
    title: "Learning Rust",
    lists: [
      {
        title: "",
        bookmarks: [
          {
            title: "nannou",
            url: "https://nannou.cc/",
          },
          {
            title: "Zero To Production In Rust",
            url: "https://www.zero2prod.com/index.html?country=Netherlands&discount_code=VAT20s",
          },
          {
            title: "Jon's videos",
            url: "https://www.youtube.com/c/JonGjengset",
          },
        ],
      },
    ],
  },
  {
    title: "Other",
    lists: [
      {
        title: "",
        bookmarks: [
          {
            title: "Exercism",
            url: "https://exercism.io/",
          },
          {
            title: "TimeMaps",
            url: "http://www.vincentmeertens.com/project/timemaps/",
          },
          {
            title: "Polyline tool",
            url: "https://www.keene.edu/campus/maps/tool/",
          },
        ],
      },
      {
        title: "Friends online",
        bookmarks: [
          { title: "Markus", url: "http://lambdanaut.net/" },
          { title: "Cyril", url: "https://cyrcle.nl/" },
        ],
      },
      {
        title: "People",
        bookmarks: [{ title: "Evan Wallace", url: "http://madebyevan.com/" }],
      },
    ],
  },
];

export default function Sandbox() {
  return (
    <section className="wrap">
      <h1>Doodles</h1>

      <ul className="list-disc ml-[24px]">
        <li>
          El Trombonista (
          <a
            className="link"
            href="https://kelleyvanevert.github.io/el-trombonista/"
          >
            mini animation
          </a>
          ) -- collab Carlota
        </li>
        <li>
          Some of my favorite recipes, with a fun ascii morphing effect (
          <a className="link" href="https://asciirecip.es/">
            asciirecip.es
          </a>
          )
        </li>
        <li>
          Visualizing JS execution through a meta-syntactic transform (
          <a className="link" href="https://jsviz2.klve.nl/">
            js sketch
          </a>
          )
        </li>
        <li>
          A visual guide to formulating an SQL query (
          <a className="link" href="https://sqlviz.klve.nl/">
            js sketch + cheat sheet
          </a>
          )
        </li>
        <li>
          JavaScript execution stepper / runtime visualizer (
          <a className="link" href="https://visualized-execution.js.org/">
            js sketch
          </a>
          ) -- <em>WORK IN PROGRESS</em>
        </li>
        <li>
          The <em>Scopes</em> programming language (
          <a className="link" href="https://scopes.js.org/">
            tentative idea
          </a>
          ) -- <em>WORK IN PROGRESS</em>
        </li>
        <li>
          Literal JSX: an idea (
          <a className="link" href="https://literal-jsx.org/">
            website
          </a>
          ) and an example parser implementation (
          <a
            href="https://www.npmjs.com/package/@literal-jsx/parser"
            className="link"
          >
            npm package
          </a>
          )
        </li>
        <li>
          A visual explorer tool for querying Babel-produced ASTs with JSPath (
          <a
            href="https://kelleyvanevert.github.io/jspath-for-ast-querying/"
            className="link"
          >
            js sketch
          </a>
          )
        </li>
        <li>
          brug{" "}
          <a className="link" href="https://brugfilm.nl/">
            (short film)
          </a>
        </li>
        <li>
          SVG arcs (
          <a href={`${CONTENT_BASE}/scratch/svg-arcs/`} className="link">
            js sketch
          </a>
          )
        </li>
        <li>
          Kabouter Wesley speech balloons (
          <a href={`${CONTENT_BASE}/scratch/kabouter_wesley/`} className="link">
            js sketch
          </a>
          )
        </li>
        <li>
          Tiling butterflies to get a Dragon's Egg origami model (
          <a href={`${CONTENT_BASE}/scratch/butterflies/`} className="link">
            js sketch
          </a>
          )
        </li>
        <li>
          <a href="https://bl.ocks.org/kelleyvanevert" className="link">
            D3 blocks
          </a>{" "}
          and{" "}
          <a
            href="https://beta.observablehq.com/@kelleyvanevert"
            className="link"
          >
            Observable notebooks
          </a>
        </li>
        <li>
          Learn some Arabic words (
          <a className="link" href={`${CONTENT_BASE}/scratch/arabic/`}>
            js sketch
          </a>{" "}
          resp.{" "}
          <a
            href="https://play.google.com/store/apps/details?id=nl.kelleyvanevert.arabic"
            className="link"
          >
            android app
          </a>
          )
        </li>
        <li>
          Go on a Torus (
          <a href={`${CONTENT_BASE}/scratch/go_torus/`} className="link">
            js sketch
          </a>
          )
        </li>
        <li>
          Fastmail+, a quick &amp; dirty web extension to add labels to Fastmail
          conversations (
          <a
            href="https://github.com/kelleyvanevert/fastmail-plus"
            className="link"
          >
            github repo
          </a>{" "}
          /{" "}
          <a
            href={`${CONTENT_BASE}/scratch/fastmail-0.1-an+fx.xpi`}
            className="link"
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
            className="link"
          >
            firefox extension file
          </a>
          )
        </li>
        <li>
          Minimalist Go made with Vue.js (
          <a className="link" href={`${CONTENT_BASE}/scratch/vue-go/`}>
            js sketch
          </a>
          )
        </li>
        <li>
          Ridiculous CSS 3D transforms (
          <a className="link" href={`${CONTENT_BASE}/scratch/css3d/`}>
            js sketch
          </a>
          )
        </li>
        <li>
          Loesje poster design studio (
          <a className="link" href={`${CONTENT_BASE}/scratch/loesje/`}>
            js app
          </a>
          )
        </li>
        <li>
          Extendable table (
          <a href={`${CONTENT_BASE}/scratch/cyril_tafel/`} className="link">
            js plan sketch
          </a>{" "}
          /{" "}
          <a
            href="http://cyrcle.nl/portfolio/uitbreidbare-tafel/"
            className="link"
          >
            docu
          </a>
          )
        </li>
        <li>
          Origami Pixels (
          <a
            href={`${CONTENT_BASE}/scratch/cyril_origami_pixels/`}
            className="link"
          >
            js sketch
          </a>{" "}
          /{" "}
          <a
            href="https://play.google.com/store/apps/details?id=nl.kelleyvanevert.origamipixels"
            className="link"
          >
            android app
          </a>
          )
        </li>
        <li>
          Perry's 16 -- an old card game like solitaire (
          <a
            href="https://play.google.com/store/apps/details?id=nl.kelleyvanevert.perry16"
            className="link"
          >
            android app
          </a>
          )
        </li>
        <li>
          Processing.js Boids (
          <a className="link" href={`${CONTENT_BASE}/scratch/boids/`}>
            js sketch
          </a>
          )
        </li>
      </ul>

      {bookmarkSections.map((section, k) => {
        return (
          <Fragment key={k}>
            <h2>{section.title}</h2>
            <ul className="list-disc ml-[24px]">
              {section.lists.map((list, j) => {
                return (
                  <li key={j}>
                    {list.title && `${list.title}: `}
                    {list.bookmarks.map((bookmark, i) => {
                      return (
                        <Fragment key={i}>
                          {i > 0 && " | "}
                          <a className="link" href={bookmark.url}>
                            {bookmark.title}
                          </a>
                        </Fragment>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
          </Fragment>
        );
      })}
    </section>
  );
}
