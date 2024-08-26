"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type UseInput = {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const useInput = (
  initialValue?: string | number,
  validator?: (value: string | number) => boolean
): UseInput => {
  const [value, setValue] = useState<string | number>(initialValue || "");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return {
    value,
    onChange,
  };
};
