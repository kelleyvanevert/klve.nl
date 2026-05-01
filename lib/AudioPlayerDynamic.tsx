"use client";

import dynamic from "next/dynamic";

export const AudioPlayer = dynamic(
  () => import("./AudioPlayer").then((m) => m.AudioPlayer),
  { ssr: false },
);
