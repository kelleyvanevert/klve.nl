type Props = {
  playing: boolean;
};

export function PlayPause({ playing }: Props) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {playing ? (
        <g key="playing">
          <rect
            x="21"
            y="20"
            width="6"
            height="20"
            className="fill-black dark:fill-white"
          />
          <rect
            x="33"
            y="20"
            width="6"
            height="20"
            className="fill-black dark:fill-white"
          />
        </g>
      ) : (
        <g key="paused">
          <path
            d="M24 41V19L42 29.7179L24 41Z"
            className="fill-black dark:fill-white"
          />
        </g>
      )}
    </svg>
  );
}
