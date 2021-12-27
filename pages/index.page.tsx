import { ReactNode } from "react";
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
      Hi there!&emsp;I'm Kelley. I{" "}
      <a className="link" href="https://mywheels.nl">
        code
      </a>
      ,{" "}
      <a className="link" href="https://hackyourfuture.net/">
        teach
      </a>
      , and{" "}
      <Link href="/projects">
        <a className="link">doodle</a>
      </Link>
      . Sometimes I make{" "}
      <Link href="/photography">
        <a className="link">pictures</a>
      </Link>{" "}
      or{" "}
      <Link href="/drawings">
        <a className="link">drawings</a>
      </Link>
      , and in the past I've produced{" "}
      <a className="link" href="https://cargocollective.com/kvhku">
        some art
      </a>
      . Also I studied theoretical computer science and learned many{" "}
      <a className="link" href="https://content.klve.nl/s/thb.pdf">
        interesting
      </a>{" "}
      <a className="link" href="https://content.klve.nl/s/thm.pdf">
        things
      </a>
      .
    </p>
  );
}

function Content() {
  return (
    <>
      <p style={{ textIndent: 10 }}>
        Some things that <strong>fascinate</strong> me are, among others:{" "}
        <Item num={1}>
          <em>Typography</em>
        </Item>
        , (or more generally, what can be done with the reduced toolset of
        drawing black shapes on white backgrounds);{" "}
        <Item num={2}>
          <em>Visual arts</em>
        </Item>{" "}
        (and in particular spatial arts, with a special love for Mark Manders'
        work);{" "}
        <Item num={3}>
          <em>Code</em>
        </Item>{" "}
        (a topic that I previously formally studied for its semantic character,
        but now practice pragmatically).
      </p>
      <p style={{ textIndent: 10 }}>
        You will typically find me: writing{" "}
        <TagLink href="https://jsviz2.klve.nl/">JS code</TagLink>, listening to{" "}
        <TagLink href="https://www.youtube.com/watch?v=hqsSYvnUyR0">
          Avishai Cohen
        </TagLink>{" "}
        + learning to play{" "}
        <TagLink href="http://www.olafmeijer.nl/">jazz bass</TagLink>, reading{" "}
        <TagLink href="https://www.goodreads.com/book/show/20697435-the-book-of-strange-new-things">
          Michel Faber
        </TagLink>{" "}
        <TagLink href="https://www.goodreads.com/book/show/111464.The_Good_Doctor">
          Damon Galgut
        </TagLink>
        , admiring{" "}
        <TagLink href="http://www.markmanders.org/works-a/">
          Mark Manders'
        </TagLink>{" "}
        spatial work, folding or modelling some{" "}
        <TagLink href="https://observablehq.com/@kelleyvanevert/tiling-butterflies-to-get-a-dragons-egg-origami-model">
          origami tesselation
        </TagLink>
        , or trying to make sense of the political world through e.g.{" "}
        <TagLink href="https://plato.stanford.edu/entries/habermas/">
          Habermas
        </TagLink>{" "}
        <TagLink href="https://plato.stanford.edu/entries/foucault/#OrdeThin">
          Foucault
        </TagLink>
        .
      </p>
    </>
  );
}

function Item({ num, children }: { num: number; children?: ReactNode }) {
  return (
    <span className="whitespace-nowrap">
      <span className="rounded-full border border-black dark:border-white font-mono text-sm mx-[3px] h-[18px] w-[18px] px-1">
        {num}
      </span>{" "}
      {children}
    </span>
  );
}

function TagLink({ href, children }: { href: string; children?: ReactNode }) {
  return (
    <a
      href={href}
      className="whitespace-nowrap font-mono font-bold text-xs rounded-full border border-gray-400 py-[1px] px-[5px] hover:bg-gray-100 dark:hover:bg-gray-700 focus:border-black dark:focus:border-white focus:text-black dark:focus:text-white focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 ring-black"
    >
      {children}
    </a>
  );
}
