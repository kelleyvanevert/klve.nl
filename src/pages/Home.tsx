import styled from "styled-components/macro";
import React from "react";
import { Link } from "react-router-dom";

import { CONTENT_BASE } from "web/config";

function Nobr({ children }: { children: React.ReactNode }) {
  return <span style={{ whiteSpace: "nowrap" }}>{children}</span>;
}

export default function Home() {
  return (
    <Container className="wrapr">
      <div className="content">
        <h1 style={{ display: "none" }}>Kelley van Evert</h1>
        <Lead>
          Hi there!&emsp;I'm Kelley. I{" "}
          <a href="https://codaisseur.com/">teach</a>,{" "}
          <a href="https://mywheels.nl">code</a>, and{" "}
          <Link to="/projects">experiment with</Link> web technologies.
          Sometimes I produce <Link to="/photography">pictures</Link>, and in
          the past I produced{" "}
          <a href="https://cargocollective.com/kvhku">some art</a>, but mostly I
          ponder. Also I studied theoretical computer science and learned many
          interesting things.
        </Lead>
        <Photo>
          <PhotoPlaceholder>
            <PhotoRatio />
            <PhotoContainer>
              <img
                alt="Kelley van Evert"
                src={`${CONTENT_BASE}/s/_MG_2393.jpg`}
              />
            </PhotoContainer>
          </PhotoPlaceholder>
          <PhotoCredits>
            photo by <a href="http://cyrcle.nl/">Cyril Cleven</a>
          </PhotoCredits>
        </Photo>
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
    </Container>
  );
}

const Photo = styled.div`
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  padding-top: 4px; /* aesthetics of cmp text height */
`;

const PhotoPlaceholder = styled.div`
  position: relative;
  overflow: hidden;
`;

const PhotoRatio = styled.div`
  padding-top: 66.5%;
  box-sizing: border-box;
`;

const PhotoContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const PhotoCredits = styled.div`
  text-align: right;
  margin: 5px;
  font-size: 13px;
  font-style: italic;
`;

const Container = styled.section`
  p {
    text-indent: 10px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: 758px) {
    ${Photo} {
      margin: 0;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 300px;
    }
    .content {
      margin-left: 330px;
    }
  }

  @media (min-width: 1100px) {
    ${Photo} {
      width: 400px;
    }
    .content {
      margin-left: 440px;
    }
  }

  @media (min-width: 1300px) {
    ${Photo} {
      width: 450px;
    }
    .content {
      margin-left: 500px;
    }
  }
`;

const Lead = styled.p`
  font-size: 140%;
  line-height: 140%;
  text-indent: 0 !important;
  margin-bottom: 20px;
`;

const Num = styled.span`
  display: inline-block;
  font-size: 120%;
  margin: 0 3px 0 4px;
  position: relative;
  top: 2px;
`;

const Item = styled.em``;
