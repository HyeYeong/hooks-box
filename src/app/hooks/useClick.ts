"use client";

import { useRef, useEffect, MutableRefObject } from "react";

type UseClick = {
  element: MutableRefObject<HTMLButtonElement | null>;
};

export const useClick = (onClick: (event: MouseEvent) => void): UseClick => {
  const element = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const currentElement = element.current;

    if (currentElement) {
      currentElement.addEventListener("click", onClick);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return {
    element,
  };
};
