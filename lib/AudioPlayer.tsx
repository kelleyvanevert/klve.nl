import {
  forwardRef,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import WaveSurfer from "wavesurfer.js";
import { useIsDarkMode } from "layouts/Layout";
import { PlayPause } from "./PlayPause";
import { useRefCallback } from "./useRefCallback";

type Props = {
  className?: string;
  id?: string;
  playNext?: string;
  title: string;
  info?: ReactNode;
  url: string;
};

export function AudioPlayer({
  className,
  id,
  playNext,
  title,
  info,
  url,
}: Props) {
  const isDarkMode = useIsDarkMode();

  const waveformContainer = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [instance, setInstance] = useState<WaveSurfer>();

  const colors = useMemo(() => {
    if (isDarkMode) {
      return {
        cursorColor: "#fff",
        cursorColorWhenInactive: "transparent",
        progressColor: "#eee",
        waveColor: "#444",
      };
    }

    return {
      cursorColor: "#000",
      cursorColorWhenInactive: "transparent",
      progressColor: "#222",
      waveColor: "#ddd",
    };
  }, [isDarkMode]);

  const [mostRecentlyActive, setMostRecentlyActive] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!instance) return;

    instance.setCursorColor(
      mostRecentlyActive ? colors.cursorColor : colors.cursorColorWhenInactive
    );
    instance.setProgressColor(colors.progressColor);
    instance.setWaveColor(colors.waveColor);
  }, [colors, mostRecentlyActive, instance]);

  const pause = useRefCallback((fromOtherPlayer?: boolean) => {
    if (!instance) return;

    setPlaying(false);
    instance.pause();

    if (fromOtherPlayer) {
      setMostRecentlyActive(false);
    }
  });

  const play = useRefCallback(() => {
    if (!instance) return;

    (window as any).stopCurrentlyPlaying?.();
    (window as any).stopCurrentlyPlaying = () => {
      pause(true);
    };

    setPlaying(true);
    setMostRecentlyActive(true);
    instance.play();
  });

  const playOrPause = useRefCallback(() => {
    if (!playing) {
      play();
    } else {
      pause();
    }
  });

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      (async () => {
        const instance = WaveSurfer.create({
          container: waveformContainer.current!,
          responsive: true,
          height: 60,
          barWidth: 2,
          barHeight: 1,
          barGap: 1,
          cursorWidth: 2,
          cursorColor: colors.cursorColorWhenInactive,
          progressColor: colors.progressColor,
          waveColor: colors.waveColor,
        });

        instance.load(url);

        instance.on("ready", () => {
          setInstance(instance);
          if (id) {
            (window as any).playerInstances = {
              ...(window as any).playerInstances,
              [id]: play,
            };
          }
        });

        instance.on("seek", () => {
          play();
        });

        instance.on("finish", () => {
          pause();
          if (playNext) {
            (window as any).playerInstances?.[playNext]?.();
          }
        });
      })();
    }
  }, []);

  return (
    <div className={className}>
      <div className="font-bold text-black dark:text-white text-lg">
        {title}
      </div>
      {!!info && <div>{info}</div>}

      <div className="mt-2 mb-4 h-[60px] flex">
        <button
          className="w-[60px] h-[60px] grow-0 shrink-0 transform transition-transform active:scale-90"
          type="button"
          onClick={playOrPause}
        >
          <PlayPause playing={playing} />
        </button>
        <div
          ref={waveformContainer}
          className="grow h-[60px] cursor-pointer"
        ></div>
      </div>
    </div>
  );
}
