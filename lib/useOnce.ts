import { useEffect, useRef } from "react";

export function useOnce(fn: Function) {
  const done = useRef(false);

  useEffect(() => {
    if (!done.current) {
      done.current = true;
      fn();
    }
  }, []);
}
