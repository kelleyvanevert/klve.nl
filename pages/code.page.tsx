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
          {
            title: "thi.ng",
            url: "https://thi.ng/",
          },
          {
            title: "Chocolat",
            url: "https://chocolat.insipi.de/",
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
          {
            title: "Free stuff for devs",
            url: "https://freestuff.dev/",
          },
          {
            title: "Excalidraw",
            url: "https://excalidraw.com/",
          },
          {
            title: "tldraw",
            url: "https://www.tldraw.com/",
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
          {
            title: "Kenney",
            url: "https://kenney.nl/",
          },
        ],
      },
      {
        title: "Infrastructure",
        bookmarks: [
          { title: "Materialize", url: "https://materialize.io/" },
          { title: "Hasura", url: "https://hasura.io/" },
          { title: "Zapatos", url: "https://github.com/jawj/zapatos" },
          { title: "SurrealDB", url: "https://surrealdb.com/features" },
        ],
      },
      {
        title: "Setup",
        bookmarks: [
          {
            title: "Nerd-font",
            url: "https://github.com/ryanoasis/nerd-fonts",
          },
          {
            title: "lsd (ls alternative)",
            url: "https://github.com/lsd-rs/lsd",
          },
        ],
      },
    ],
  },
  {
    title: "Rust",
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
          {
            title: "pretzelhammer's Rust blog 🦀",
            url: "https://github.com/pretzelhammer/rust-blog",
          },
          {
            title: "Blessed crates",
            url: "https://blessed.rs/crates",
          },
          {
            title: "Learn WGPU",
            url: "https://sotrh.github.io/learn-wgpu/#what-is-wgpu",
          },
          {
            title: "Makepad",
            url: "https://makepad.dev/",
          },
        ],
      },
    ],
  },
  {
    title: "Other",
    lists: [
      {
        title: "Tools & resources",
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
          {
            title: "Vocal Remover",
            url: "https://vocalremover.org/",
          },
          {
            title: "PRQL",
            url: "https://prql-lang.org/",
          },
          {
            title: "DuckDB",
            url: "https://duckdb.org/",
          },
          {
            title: "Typst",
            url: "https://typst.app/",
          },
          {
            title: "Sourcehut",
            url: "https://sr.ht/",
          },
          {
            title: "Kenney free game assets",
            url: "https://kenney.nl/",
          },
        ],
      },
      {
        title: "Interesting people & blogs",
        bookmarks: [
          {
            title: "Needlessly complex",
            url: "https://mzucker.github.io/",
          },
          {
            title: "Ink & switch",
            url: "https://www.inkandswitch.com/",
          },
          {
            title: "Faultlore",
            url: "https://faultlore.com/blah/robinhood-part-1/",
          },
        ],
      },
      {
        title: "Friends online",
        bookmarks: [
          { title: "Markus", url: "http://lambdanaut.net/" },
          { title: "Cyril", url: "https://cyrcle.nl/" },
          { title: "Rein", url: "https://youcancode.it/" },
          { title: "Blaž", url: "https://soundcloud.com/blaz-pavlica" },
        ],
      },
    ],
  },
];

export default function Sandbox() {
  return (
    <section className="wrap relative mt-[60px] md:mt-[100px]">
      <h1 className="hidden">Doodles</h1>

      <ul className="list-disc ml-[24px]">
        <li>
          Advent of Code 🎄/🦀 (
          <a
            className="link"
            href="https://github.com/kelleyvanevert/adventofcode2022"
          >
            2022
          </a>
          ) (
          <a
            className="link"
            href="https://github.com/kelleyvanevert/adventofcode2023"
          >
            2023
          </a>
          ) (
          <a
            className="link"
            href="https://github.com/kelleyvanevert/adventofcode2024"
          >
            2024
          </a>
          ) <span className="mx-2">+</span> Adventlang (
          <a
            className="link"
            href="https://github.com/kelleyvanevert/adventofcode2023/tree/main?tab=readme-ov-file#syntax-example"
          >
            code
          </a>
          )
        </li>
        <li>
          Rocktober (
          <a className="link" href="https://rock2023.klve.nl/">
            2023
          </a>
          ) (
          <a className="link" href="https://rock2024.klve.nl/">
            2024
          </a>
          )
        </li>
        <li>
          Hexastack (
          <a className="link" href="https://hexastack.klve.nl">
            web app
          </a>{" "}
          /{" "}
          <a
            href="https://play.google.com/store/apps/details?id=nl.klve.hexastack"
            className="link"
          >
            android app
          </a>
          )
        </li>
        <li>
          Visualizing JS execution through a meta-syntactic transform (
          <a className="link" href="https://jsviz.klve.nl/">
            teaching tool
          </a>
          )
        </li>
        <li>
          <WIP /> Rust audio livecode editor (
          <a
            className="link"
            href="https://github.com/kelleyvanevert/rust_live"
          >
            code
          </a>
          )
        </li>
        <li>
          El Trombonista, collab Carlota (
          <a
            className="link"
            href="https://kelleyvanevert.github.io/el-trombonista/"
          >
            mini animation
          </a>
          )
        </li>
        <li>
          <span className="mr-0.5">ASCII</span>recip.es (
          <a className="link" href="https://asciirecip.es/">
            website
          </a>
          )
        </li>
        <li>
          A visual guide to formulating an SQL query (
          <a className="link" href="https://sqlviz.klve.nl/">
            teaching tool
          </a>
          )
        </li>
        <li>
          <WIP /> JavaScript execution stepper / runtime visualizer (
          <a className="link" href="https://visualized-execution.js.org/">
            teaching tool
          </a>
          )
        </li>
        <li>
          <WIP /> The <em>Scopes</em> programming language (
          <a className="link" href="https://scopes.js.org/">
            tentative idea
          </a>
          )
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
            doodle
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
            doodle
          </a>
          )
        </li>
        <li>
          Kabouter Wesley speech balloons (
          <a href={`${CONTENT_BASE}/scratch/kabouter_wesley/`} className="link">
            doodle
          </a>
          )
        </li>
        <li>
          Tiling butterflies to get a Dragon's Egg origami model (
          <a href={`${CONTENT_BASE}/scratch/butterflies/`} className="link">
            doodle
          </a>{" "}
          /{" "}
          <a
            href="https://observablehq.com/@kelleyvanevert/tiling-butterflies-to-get-a-dragons-egg-origami-model"
            className="link"
          >
            interactive notebook
          </a>
          )
        </li>
        <li>
          My{" "}
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
            web app
          </a>
          {" / "}
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
            doodle
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
            code
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
            doodle
          </a>
          )
        </li>
        <li>
          Ridiculous CSS 3D transforms (
          <a className="link" href={`${CONTENT_BASE}/scratch/css3d/`}>
            doodle
          </a>
          )
        </li>
        <li>
          Loesje poster design studio (
          <a className="link" href={`${CONTENT_BASE}/scratch/loesje/`}>
            web app
          </a>
          )
        </li>
        <li>
          Extendable table (
          <a href={`${CONTENT_BASE}/scratch/cyril_tafel/`} className="link">
            design tool
          </a>{" "}
          /{" "}
          <a
            href="https://github.com/kelleyvanevert/extendable_table"
            className="link"
          >
            documentary GIFs
          </a>
          )
        </li>
        <li>
          Origami Pixels (
          <a
            href={`${CONTENT_BASE}/scratch/cyril_origami_pixels/`}
            className="link"
          >
            doodle
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
            doodle
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

function WIP() {
  return <span className="mr-2 text-xs font-mono text-neutral-400">[WIP]</span>;
}
