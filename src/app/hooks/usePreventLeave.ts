"use client";

type UsePreventLeave = {
  enablePrevent: VoidFunction;
  disablePrevent: VoidFunction;
};

export const usePreventLeave = (): UsePreventLeave => {
  const listener = (event: {
    preventDefault: () => void;
    returnValue: string;
  }) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };

  return {
    enablePrevent,
    disablePrevent,
  };
};
