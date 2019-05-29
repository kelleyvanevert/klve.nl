import "styled-components/macro";
import React from "react";
import cx from "classnames";
import styles from "./Home.module.scss";

function Nobr({ children }: { children: React.ReactNode }) {
  return <span css="white-space: nowrap;">{children}</span>;
}

function Num({ children }: { children: React.ReactNode }) {
  return <span className={styles.no}>{children}</span>;
}

function Item({ children }: { children: React.ReactNode }) {
  return <em className={styles.item}>{children}</em>;
}

export default function Home() {
  return (
    <article className={cx("wrapr", styles.home)}>
      <div className={styles.content}>
        <h1 css="display: none;">Kelley van Evert</h1>
        <p className={styles.lead}>
          Hi there!&emsp;I'm Kelley, recently graduated<sup>☀</sup> theoretical
          computer science{" "}
          <span css="font-variant-caps: all-small-caps;">MS</span>c by day …
          dreamer by heart, budding visual artist by volition, and freelance
          photographer / web designer by accidental profession.
        </p>
        <div className={styles.photo}>
          <div className={styles.placeholder}>
            <div className={styles.ratio} />
            <div className={styles.me}>
              <img
                alt="Kelley van Evert"
                src={`${process.env.REACT_APP_CONTENT_BASE}/s/_MG_2393.jpg`}
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