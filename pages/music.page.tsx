import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { executeQraphQLRequest } from "lib/graphql";
import { Markdown } from "lib/Markdown";

const AudioPlayer = dynamic(
  () => import("lib/AudioPlayer").then((m) => m.AudioPlayer),
  { ssr: false }
);

type Track = {
  id: string;
  title: string;
  description: string;
  file: {
    id: string;
    filesize: string;
    type: string;
    filename_download: string;
  };
};

type Props = {
  tracks: Track[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { tracks } = await executeQraphQLRequest(
    `
      {
        tracks {
          id
          title
          description
          file {
            id
            filesize
            type
            filename_download
          }
        }
      }
    `,
    {}
  );

  return {
    props: {
      tracks,
    },
    revalidate: 60 * 60, // at most once every hour
  };
};

export default function Page({ tracks }: Props) {
  const [rock, setRock] = useState(false);

  return (
    <section className="wrap relative mt-[60px] md:mt-[100px]">
      <h1 className="hidden">Music</h1>
      <p className="relative top-[-30px]">
        Lately I've been learning how to produce electronic music, something
        that's been on my mind since I was in high school tbh, and I'm currently
        working on completing my first album,{" "}
        <span className="whitespace-nowrap">
          <em style={{ fontVariant: "small-caps", fontWeight: "bold" }}>
            Journey around the Sun
          </em>
          ,
        </span>{" "}
        thematized around a little worker android's adventures in space. Hope
        you like it!
      </p>

      {tracks.map((track, i) => {
        return (
          <AudioPlayer
            key={track.id}
            className="mb-12"
            id={track.id}
            playNext={tracks[i + 1]?.id}
            title={track.title}
            url={`https://data.klve.nl/assets/${track.file.id}/${track.file.filename_download}`}
            info={<Markdown source={track.description} inline />}
          />
        );
      })}

      <h2>Rocktober 2023</h2>
      <p className="relative">
        Let's see if anything good comes from this... (
        <button className="link" onClick={() => setRock((b) => !b)}>
          toggle
        </button>
        )
      </p>

      {rock && (
        <Fragment>
          <AudioPlayer
            className="mt-12"
            title="Day 07 - Rust, a memory-safe programming language ft. Auke"
            url="https://cdn.jsdelivr.net/gh/kelleyvanevert/rocktober2023/07 - Rust, a memory-safe programming language ft. Auke.wav"
          />

          <AudioPlayer
            className="mt-12"
            title="Day 08 - Powerbank"
            url="https://cdn.jsdelivr.net/gh/kelleyvanevert/rocktober2023/08 - Powerbank.wav"
          />

          <AudioPlayer
            className="mt-12"
            title="Day 06 - Exhausted"
            url="https://cdn.jsdelivr.net/gh/kelleyvanevert/rocktober2023/06 - Exhausted.wav"
          />

          <AudioPlayer
            className="mt-12"
            title="Day 05 - Scary story"
            url="https://cdn.jsdelivr.net/gh/kelleyvanevert/rocktober2023/05 - Scary story.wav"
          />

          <AudioPlayer
            className="mt-12"
            title="Day 04 - Breathe"
            url="https://cdn.jsdelivr.net/gh/kelleyvanevert/rocktober2023/04 - Breathe.wav"
          />

          <AudioPlayer
            className="mt-12"
            title="Day 03 - Kort geding"
            url="https://cdn.jsdelivr.net/gh/kelleyvanevert/rocktober2023/03 - Kort geding.wav"
          />

          <AudioPlayer
            className="mt-12"
            title="Day 02 - Love is blind"
            url="https://cdn.jsdelivr.net/gh/kelleyvanevert/rocktober2023/02 - Love is blind.wav"
          />

          <AudioPlayer
            className="mt-12"
            title="Day 01 - Carlota explores the ocean"
            url="https://cdn.jsdelivr.net/gh/kelleyvanevert/rocktober2023/01 - Carlota explores the ocean.wav"
          />
        </Fragment>
      )}
    </section>
  );
}
