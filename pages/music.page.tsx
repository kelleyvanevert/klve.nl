import React from "react";
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
    </section>
  );
}
