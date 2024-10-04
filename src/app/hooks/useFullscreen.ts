"use client";

import { MutableRefObject, useRef } from "react";

type UseFullscreen = {
  fullScreenEl: MutableRefObject<HTMLImageElement | null>;
  triggerFullScreen: VoidFunction;
  exitScreen: VoidFunction;
};

export const useFullscreen = (): UseFullscreen => {
  const fullScreenEl = useRef<HTMLImageElement>(null);
  const triggerFullScreen = () => {
    if (fullScreenEl.current) {
      fullScreenEl.current.requestFullscreen();
    }
    return fullScreenEl;
  };

  const exitScreen = () => {
    document.exitFullscreen();
  };

  return {
    fullScreenEl,
    triggerFullScreen,
    exitScreen,
  };
};
