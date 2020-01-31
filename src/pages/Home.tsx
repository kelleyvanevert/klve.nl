import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import { CONTENT_BASE } from "~/config";

import styles from "./Home.scss";

function Nobr({ children }: { children: React.ReactNode }) {
  return <span style={{ whiteSpace: "nowrap" }}>{children}</span>;
}

function Num({ children }: { children: React.ReactNode }) {
  return <span className={styles.no}>{children}</span>;
}

function Item({ children }: { children: React.ReactNode }) {
  return <em>{children}</em>;
}

export default function Home() {
  return (
    <article className={cx("wrapr", styles.home)}>
      <div className={styles.content}>
        <h1 style={{ display: "none" }}>Kelley van Evert</h1>
        <p className={styles.lead}>
          Hi there!&emsp;I'm Kelley. I{" "}
          <a href="https://codaisseur.com/">teach</a>,{" "}
          <a href="https://mywheels.nl">code</a>, and{" "}
          <Link to="/projects">experiment with</Link> web technologies.
          Sometimes I produce <Link to="/photography">pictures</Link>, and in
          the past I produced{" "}
          <a href="https://cargocollective.com/kvhku">some art</a>, but mostly I
          ponder. Also I studied theoretical computer science and learned many
          interesting things.
        </p>
        <div className={styles.photo}>
          <div className={styles.placeholder}>
            <div className={styles.ratio} />
            <div className={styles.me}>
              <img
                alt="Kelley van Evert"
                src={`${CONTENT_BASE}/s/_MG_2393.jpg`}
              />
            </div>
          </div>
          <div className={styles.portrait_credits}>
            photo by <a href="http://cyrcle.nl/">Cyril Cleven</a>
          </div>
        </div>
        <p>
          I am <strong>fascinated</strong>, among others, by{" "}
          <Nobr>
            <Num>①</Num> <Item>Typography</Item>,
          </Nobr>{" "}
          or in fact more generally, the inexhaustible possibilities, beauty
          &amp; elegance of the reduced toolset that is simply drawing black
          shapes on white backgrounds;{" "}
          <Nobr>
            <Num>②</Num> the <Item>visual arts</Item>,
          </Nobr>{" "}
          and in particular spatial arts (with a special love for Mark Manders'
          works);{" "}
          <Nobr>
            <Num>③</Num> <Item>Code</Item>,
          </Nobr>{" "}
          both in its formally studied, semantic character (e.g. type theory),
          as well as in it's naturally growing, socially and cognitively
          embedded character (as exemplified by javascript in the context of the
          evolving modern web).
        </p>
        <p>
          My <strong>hobbies</strong> include{" "}
          <Nobr>
            <Num>①</Num> climbing{" "}
          </Nobr>{" "}
          mountains (see the picture to the left, where I'm climbing Pyttegga;
          <Nobr>
            <Num>②</Num> writing
          </Nobr>{" "}
          javascript code that is beautiful in its conceptual shape (e.g. using
          the excellent Vue, Knockout, or d3 libraries) and/or in its produced
          imagery;{" "}
          <Nobr>
            <Num>③</Num> folding
          </Nobr>{" "}
          (or else modeling) origami tesselations;{" "}
          <Nobr>
            <Num>④</Num> reading/watching
          </Nobr>{" "}
          most things sci-fi&mdash;although I definitely prefer, say, Michel
          Faber's <em>The Book of Strange New Things</em> over the latest Marvel
          production;{" "}
          <Nobr>
            <Num>⑤</Num> trying
          </Nobr>{" "}
          to make sense of the political world through the wise words of
          Habermas and others.
        </p>
      </div>
    </article>
  );
}
