"use client";

import { useEffect, useState } from "react";

type UseScroll = {
  scrollState: { x: number; y: number };
};

export const useScroll = (): UseScroll => {
  const [scrollState, setScrollState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setScrollState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return {
    scrollState,
  };
};
