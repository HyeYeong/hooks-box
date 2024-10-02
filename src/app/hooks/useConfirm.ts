"use client";

type UseConfirm = {
  confirmAction: VoidFunction | undefined;
};

export const useConfirm = (
  message: string = "",
  callback: VoidFunction
): UseConfirm => {
  if (typeof callback !== "function") {
    return {
      confirmAction: undefined,
    };
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    }
  };

  return {
    confirmAction,
  };
};
