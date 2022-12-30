type Props = {
  loading?: boolean;
  playing: boolean;
};

export function PlayPause({ loading, playing }: Props) {
  if (loading) {
    return (
      <svg
        key="loading"
        width="60"
        height="60"
        viewBox="-2 -2 48 48"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#fff"
      >
        <g fill="none" fill-rule="evenodd" stroke-width="2">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    );
  }

  return (
    <svg
      key="play_pause"
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
