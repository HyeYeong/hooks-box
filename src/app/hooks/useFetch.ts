"use client";

import { useEffect, useState } from "react";

type OptionType = {
  url: string;
};

type FetchStateType = {
  loading: boolean;
  error: null | Error;
  data: any;
  refetch: () => void;
};

const defaultData = {
  loading: true,
  error: null,
  data: {},
  refetch: () => {},
};

export const useFetch = (options: OptionType) => {
  const [state, setState] = useState<FetchStateType>(defaultData);
  const fetchData = async () => {
    try {
      const response = await fetch(options.url);
      if (!response.ok) {
        throw new Error("Network error");
      }
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        loading: false,
        data,
        error: null,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        error: error instanceof Error ? error : new Error(String(error)),
      }));
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.url]);

  return { ...state, refetch: fetchData };
};
