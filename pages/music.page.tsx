import React from "react";

export default function Page() {
  return (
    <section className="wrap">
      <h1 className="hidden">Music</h1>

      <div className="-m-8 flex flex-wrap items-center justify-evenly">
        <div className="flex flex-col items-center p-8">
          <div className="mb-3 text-center">
            <span className="font-bold text-black dark:text-white">
              Heart Surgery (WIP)
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

        <div className="flex flex-col items-center p-8">
          <div className="mb-3 text-center">
            <span className="font-bold text-black dark:text-white">
              Journey around the Sun
            </span>{" "}
            (
            <a
              className="link"
              href="https://music.klve.nl/emp2-4-v6-journey-around-the-sun.m4a"
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
            course at CREA.
          </div>
          <audio
            controls
            src="https://music.klve.nl/emp2-4-v6-journey-around-the-sun.m4a"
          />
        </div>

        <div className="flex flex-col items-center p-8">
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
            With thanks to Olaf's{" "}
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
