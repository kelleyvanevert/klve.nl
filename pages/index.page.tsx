import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import { CONTENT_BASE } from "../lib/config";
import { pic } from "../lib/pic";

// const images: Array<{ url: string; caption?: string }> = [
//   {
//     url: CONTENT_BASE + "/s/me/_DSF7828.jpg",
//   },
// ];

export default function Home() {
  return (
    <section className="wrapr relative mt-[60px] md:mt-[100px]">
      <div className="md:ml-[330px] lg:ml-[440px] xl:ml-[500px]">
        <h1 className="hidden">Kelley van Evert</h1>
        <Intro />
        <div className="w-full max-w-[430px] mx-auto pt-[4px] md:mx-0 md:absolute md:top-0 md:left-0 md:w-[300px] lg:w-[400px] xl:w-[450px]">
          <div className="relative overflow-hidden">
            <div
              className="box-border"
              style={{ paddingTop: `${(pic.height / pic.width) * 100}%` }}
            />
            <div className="absolute top-[0%] w-full">
              <Image src={pic} alt="" className="block w-full h-auto" />
              {/* <img
                className="block w-full h-auto"
                alt=""
                // met cyril op een toren in wenen
                // src={`${CONTENT_BASE}/s/me/_DSF7540.jpg`}

                // met cyril op pytegga
                // src={`${CONTENT_BASE}/s/me/_MG_2393.jpg`}

                // vintagey, don't really remember where
                // src={`${CONTENT_BASE}/s/me/19832674_1556692387714443_1437134954_n.jpg`}

                // met Markus in de Weurtse uiterwaarden
                // src={`${CONTENT_BASE}/s/me/IMG_1442.jpg`}

                // met isabel in het rembrandtpark
                // src={`${CONTENT_BASE}/s/me/DSCF2929.jpg`}

                // paragliden
                // src={`${CONTENT_BASE}/s/me/_DSF7828.jpg`}

                // sound design 2022
                src={`${CONTENT_BASE}/s/me/DSCF2881.jpg`}
              /> */}
            </div>
          </div>
          <div className="flex justify-end m-[5px] text-[13px] italic">
            <span>
              photo by <span className="not-italic">晨</span>
            </span>
          </div>
        </div>
        <Content />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <p className="text-xl mb-[20px] md:mb-[28px]">
      Hi there!&emsp;I'm Kelley. I{" "}
      <span className="whitespace-nowrap">
        <a className="link" href="https://ijsfontein.nl">
          code
        </a>
        ,
      </span>{" "}
      <span className="whitespace-nowrap">
        <a className="link" href="https://hackyourfuture.net/">
          teach
        </a>
        ,
      </span>{" "}
      and{" "}
      <span className="whitespace-nowrap">
        <Link href="/code" className="link">
          doodle
        </Link>
        .
      </span>{" "}
      Sometimes I make{" "}
      <Link href="/photography" className="link">
        pictures
      </Link>{" "}
      or{" "}
      <span className="whitespace-nowrap">
        <Link href="/drawings" className="link">
          drawings
        </Link>
        ,
      </span>{" "}
      and in the past I've produced{" "}
      <span className="whitespace-nowrap">
        <a className="link" href="https://cargocollective.com/kvhku">
          some art
        </a>
        .
      </span>{" "}
      Also I studied theoretical computer science and learned many{" "}
      <a className="link" href="https://content.klve.nl/s/thb.pdf">
        interesting
      </a>{" "}
      <span className="whitespace-nowrap">
        <a className="link" href="https://content.klve.nl/s/thm.pdf">
          things
        </a>
        .
      </span>
    </p>
  );
}

function Content() {
  return (
    <>
      <p className="indent-3">
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
      <p className="indent-3">
        You will typically find me: writing{" "}
        <TagLink href="https://jsviz.klve.nl/">JS</TagLink> or{" "}
        <TagLink href="https://github.com/kelleyvanevert/adventofcode2023">
          Rust
        </TagLink>
        , crocheting some{" "}
        <TagLink href="https://www.ravelry.com/projects/kellleyvanevert">
          amigurumi
        </TagLink>{" "}
        pattern, listening to{" "}
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
        <span className="whitespace-nowrap">
          <TagLink href="https://plato.stanford.edu/entries/foucault/#OrdeThin">
            Foucault
          </TagLink>
          .
        </span>
      </p>
      <p className="indent-3">
        Here's my (slightly outdated){" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="link indent-0"
          href="https://content.klve.nl/s/cv.pdf"
        >
          CV
        </a>
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
