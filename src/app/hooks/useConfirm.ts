"use client";

import { MESSAGE } from "@/app/enums/text";

export const useConfirm = (
  message: string = MESSAGE.Default,
  onConfirm: VoidFunction,
  onCancel?: VoidFunction
): VoidFunction => {
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel?.();
    }
  };

  return confirmAction;
};
