"use client";

import { MutableRefObject, useEffect, useRef } from "react";

type UseFadeIn = {
  ref: MutableRefObject<HTMLDivElement | null>;
  style: { [key: string]: string };
};

export const useFadeIn = (duration = 1): UseFadeIn => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      requestAnimationFrame(() => {
        current.style.opacity = "1";
        current.style.transition = `opacity ${duration}s ease-in-out`;
      });
    }
  }, [duration]);

  return {
    ref: element,
    style: { opacity: "0" },
  };
};
