"use client";

import { Dispatch, SetStateAction, useState } from "react";

export type CurrentItem = {
  tab: string;
  content: string;
};

type UseTabs = {
  currentItem: CurrentItem;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export const useTabs = (
  initialTab: number,
  allTabs: CurrentItem[]
): UseTabs => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  const initialTabItem = {
    tab: "empty section",
    content: "content is empty",
  };

  return {
    currentItem:
      allTabs || Array.isArray(allTabs)
        ? allTabs[currentIndex]
        : initialTabItem,
    setCurrentIndex,
  };
};
