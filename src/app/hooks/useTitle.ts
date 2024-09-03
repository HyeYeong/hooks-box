"use client";

import { ReactNode, useState } from "react";

type UseTitle = {
  title?: string | ReactNode;
  updateTitle: (text: string) => void;
};

export const useTitle = (): UseTitle => {
  const [title, setTitle] = useState<string | ReactNode>("");
  const updateTitle = (text: string) => {
    setTitle(text);
  };

  return {
    title,
    updateTitle,
  };
};
