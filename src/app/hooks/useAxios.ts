"use client";

import { useEffect, useState } from "react";
import defaultAxios from "axios";

type OptionType = { [key: string]: string };

const defaultData = {
  loading: true,
  error: null,
  data: {},
  refetch: () => {},
};

export const useAxios = (options: OptionType, axiosInstance = defaultAxios) => {
  const [state, setState] = useState(defaultData);
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!options.url) {
      return;
    }
    setState({ ...state, loading: true });
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};
