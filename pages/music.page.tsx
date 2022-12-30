import React from "react";
import dynamic from "next/dynamic";

const AudioPlayer = dynamic(
  () => import("lib/AudioPlayer").then((m) => m.AudioPlayer),
  { ssr: false }
);

export default function Page() {
  return (
    <section className="wrap">
      <h1 className="hidden">Music</h1>
      <p className="relative top-[-30px]">
        Below is the (incomplete and still very much work-in-progress) track
        listing for my upcoming album{" "}
        <em style={{ fontVariant: "small-caps" }}>Inorganic Mechanic</em>,
        thematized around a little worker android's adventures in space. Hope
        you like it {`:)`}
      </p>

      <AudioPlayer
        className="mb-12"
        id="first_steps"
        playNext="lost_in_space"
        title="First Steps / Warm Embrace"
        url="https://music.klve.nl/halle-saale-v10-first-steps-warm-embrace.m4a"
        info={
          <span>
            Experimenting with glitches and embracing major chords, while
            visiting Nikko in Halle.
          </span>
        }
      />

      <AudioPlayer
        className="mb-12"
        id="lost_in_space"
        playNext="heart_surgery"
        title="Lost in Space"
        url="https://music.klve.nl/2022-11-v4-lost-in-space.m4a"
        info={<span>Winter cold, new colleagues, recalibrating.</span>}
      />

      <AudioPlayer
        className="mb-12"
        id="heart_surgery"
        playNext="journey_around_the_sun"
        title="Heart Surgery"
        url="https://music.klve.nl/9-v11-heart-surgery.m4a"
        info={<span>Exploring wavetables with Isabel.</span>}
      />

      <AudioPlayer
        className="mb-12"
        id="journey_around_the_sun"
        playNext="dying_android"
        title="Journey around the Sun"
        url="https://music.klve.nl/emp2-4-v9-journey-around-the-sun.m4a"
        info={
          <span>
            With thanks to Olaf's{" "}
            <a
              className="link"
              href="https://www.crea.nl/courses/film-design-and-media-en/electronic-music-production-ii"
            >
              EMP II
            </a>{" "}
            course at CREA, and Lisanna's enthusiasm.
          </span>
        }
      />

      <AudioPlayer
        className="mb-12"
        id="dying_android"
        title="Dying Android"
        url="https://music.klve.nl/7-v3-dying-android.m4a"
        info={
          <span>
            Defying kick patterns and refusing Ableton's timescales; with thanks
            to Olaf's{" "}
            <a
              className="link"
              href="https://www.crea.nl/courses/film-design-and-media-en/electronic-music-production"
            >
              EMP
            </a>{" "}
            course at CREA.
          </span>
        }
      />
    </section>
  );
}
