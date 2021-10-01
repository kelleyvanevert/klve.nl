import Link from "next/link";

import { CONTENT_BASE } from "../lib/config";

export default function Home() {
  return (
    <section className="wrapr relative">
      <div className="md:ml-[330px] lg:ml-[440px] xl:ml-[500px]">
        <h1 className="hidden">Kelley van Evert</h1>
        <Intro />
        <div className="w-full max-w-[430px] mx-auto pt-[4px] md:mx-0 md:absolute md:top-0 md:left-0 md:w-[300px] lg:w-[400px] xl:w-[450px]">
          <div className="relative overflow-hidden">
            <div className="pt-[66.5%] box-border" />
            <div className="absolute top-0 w-full">
              <img
                className="block w-full h-auto"
                alt="Kelley van Evert"
                // met cyril op een toren in wenen
                // src={`${CONTENT_BASE}/s/me/_DSF7540.jpg`}

                // met cyril op pytegga
                // src={`${CONTENT_BASE}/s/_MG_2393.jpg`}

                // vintagey, don't really remember where
                src={`${CONTENT_BASE}/s/me/19832674_1556692387714443_1437134954_n.jpg`}
              />
            </div>
          </div>
          <div className="text-right m-[5px] text-[13px] italic">
            photo taken by Julia (I think)
          </div>
        </div>
        <Content />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <p className="text-2xl mb-[20px] md:mb-[28px]">
      Hi there!&emsp;I'm Kelley. I <a href="https://codaisseur.com/">teach</a>,{" "}
      <a href="https://mywheels.nl">code</a>, and{" "}
      <Link href="/projects">
        <a>experiment with</a>
      </Link>{" "}
      web technologies. Sometimes I produce{" "}
      <Link href="/photography">
        <a>pictures</a>
      </Link>
      , and in the past I produced{" "}
      <a href="https://cargocollective.com/kvhku">some art</a>, but mostly I
      ponder. Also I studied theoretical computer science and learned many
      interesting things.
    </p>
  );
}

function Content() {
  return (
    <>
      <p style={{ textIndent: 10 }}>
        I am <strong>fascinated</strong>, among others, by{" "}
        <span className="whitespace-nowrap">
          <Num num={1} /> <em>Typography</em>,
        </span>{" "}
        or in fact more generally, the inexhaustible possibilities, beauty &amp;
        elegance of the reduced toolset that is simply drawing black shapes on
        white backgrounds;{" "}
        <span className="whitespace-nowrap">
          <Num num={2} /> the <em>visual arts</em>,
        </span>{" "}
        and in particular spatial arts (with a special love for Mark Manders'
        works);{" "}
        <span className="whitespace-nowrap">
          <Num num={3} /> <em>Code</em>,
        </span>{" "}
        both in its formally studied, semantic character (e.g. type theory), as
        well as in it's naturally growing, socially and cognitively embedded
        character (as exemplified by javascript in the context of the evolving
        modern web).
      </p>
      <p style={{ textIndent: 10 }}>
        My <strong>hobbies</strong> include{" "}
        <span className="whitespace-nowrap">
          <Num num={1} /> climbing{" "}
        </span>{" "}
        mountains (see the picture to the left, where I'm climbing Pyttegga;
        <span className="whitespace-nowrap">
          <Num num={2} /> writing
        </span>{" "}
        javascript code that is beautiful in its conceptual shape (e.g. using
        the excellent Vue, Knockout, or d3 libraries) and/or in its produced
        imagery;{" "}
        <span className="whitespace-nowrap">
          <Num num={3} /> folding
        </span>{" "}
        (or else modeling) origami tesselations;{" "}
        <span className="whitespace-nowrap">
          <Num num={4} /> reading/watching
        </span>{" "}
        most things sci-fi&mdash;although I definitely prefer, say, Michel
        Faber's <em>The Book of Strange New Things</em> over the latest Marvel
        production;{" "}
        <span className="whitespace-nowrap">
          <Num num={5} /> trying
        </span>{" "}
        to make sense of the political world through the wise words of Habermas
        and others.
      </p>
    </>
  );
}

function Num({ num }: { num: number }) {
  return (
    <span className="rounded-full border border-black dark:border-white font-mono text-sm mx-[3px] h-[18px] w-[18px] px-[4px]">
      {num}
    </span>
  );
}
