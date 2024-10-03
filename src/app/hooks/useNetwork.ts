"use client";

import { useEffect, useState } from "react";

type UseNetwork = {
  netWorkStatus: boolean;
};

export const useNetwork = (onChange: (arg: boolean) => void): UseNetwork => {
  const [netWorkStatus, setNetworkStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleChange = () => {
      onChange(navigator.onLine);
      setNetworkStatus(navigator.onLine);
    };
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, [onChange]);

  return {
    netWorkStatus,
  };
};
