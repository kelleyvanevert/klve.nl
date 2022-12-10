import React from "react";

export default function Page() {
  return (
    <section className="wrap">
      <h1 className="hidden">Music</h1>
      <p className="relative top-[-30px] text-center">
        (Everything below is still kinda work-in-progress, until I come up with
        a stage name and publish them ;))
      </p>

      <div className="-m-8 flex flex-wrap items-center justify-evenly">
        <div className="flex flex-col items-center p-8 max-w-[400px] md:w-[50%]">
          <div className="mb-3 text-center">
            <span className="font-bold text-black dark:text-white">
              Lost in Space
            </span>{" "}
            (
            <a
              className="link"
              href="https://music.klve.nl/2022-11-v4-lost-in-space.m4a"
            >
              m4a
            </a>
            )
            <br />
            Winter cold, new colleagues, recalibrating.
          </div>
          <audio
            controls
            src="https://music.klve.nl/2022-11-v4-lost-in-space.m4a"
          />
        </div>

        <div className="flex flex-col items-center p-8 max-w-[400px] md:w-[50%]">
          <div className="mb-3 text-center">
            <span className="font-bold text-black dark:text-white">
              First Steps / Warm Embrace
            </span>{" "}
            (
            <a
              className="link"
              href="https://music.klve.nl/halle-saale-v10-first-steps-warm-embrace.m4a"
            >
              m4a
            </a>
            )
            <br />
            Experimenting with glitches and embracing major chords, while
            visiting Nikko in Halle.
          </div>
          <audio
            controls
            src="https://music.klve.nl/halle-saale-v10-first-steps-warm-embrace.m4a"
          />
        </div>

        <div className="flex flex-col items-center p-8 max-w-[400px] md:w-[50%]">
          <div className="mb-3 text-center">
            <span className="font-bold text-black dark:text-white">
              Heart Surgery
            </span>{" "}
            (
            <a
              className="link"
              href="https://music.klve.nl/9-v11-heart-surgery.m4a"
            >
              m4a
            </a>
            )
            <br />
            Exploring wavetables with Isabel.
          </div>
          <audio controls src="https://music.klve.nl/9-v11-heart-surgery.m4a" />
        </div>

        <div className="flex flex-col items-center p-8 max-w-[400px] md:w-[50%]">
          <div className="mb-3 text-center">
            <span className="font-bold text-black dark:text-white">
              Journey around the Sun
            </span>{" "}
            (
            <a
              className="link"
              href="https://music.klve.nl/emp2-4-v7-journey-around-the-sun.m4a"
            >
              m4a
            </a>
            )
            <br />
            With thanks to Olaf's{" "}
            <a
              className="link"
              href="https://www.crea.nl/courses/film-design-and-media-en/electronic-music-production-ii"
            >
              EMP II
            </a>{" "}
            course at CREA, and Lisanna's enthusiasm.
          </div>
          <audio
            controls
            src="https://music.klve.nl/emp2-4-v7-journey-around-the-sun.m4a"
          />
        </div>

        <div className="flex flex-col items-center p-8 max-w-[400px] md:w-[50%]">
          <div className="mb-3 text-center">
            <span className="font-bold text-black dark:text-white">
              Dying Android
            </span>{" "}
            (
            <a
              className="link"
              href="https://music.klve.nl/7-v3-dying-android.m4a"
            >
              m4a
            </a>
            )
            <br />
            Defying kick patterns and refusing Ableton's timescales; with thanks
            to Olaf's{" "}
            <a
              className="link"
              href="https://www.crea.nl/courses/film-design-and-media-en/electronic-music-production"
            >
              EMP
            </a>{" "}
            course at CREA.
          </div>
          <audio controls src="https://music.klve.nl/7-v3-dying-android.m4a" />
        </div>
      </div>
    </section>
  );
}
