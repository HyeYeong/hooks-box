"use client";

import { useEffect } from "react";

export const useBeforeLeave = (onBefore: VoidFunction) => {
  useEffect(() => {
    const handleEvent = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      let positionX = "";
      let positionY = "";

      if (clientX <= 0) {
        positionX = "左";
      } else if (clientX >= window.innerWidth) {
        positionX = "右";
      }
      if (clientY <= 0) {
        positionY = "上";
      } else if (clientY > window.innerHeight) {
        positionY = "下";
      }
      if (positionX || positionY) {
        console.log(
          `ユーザのマウスが画面の${positionX}${positionY}側から外れました。`
        );
        onBefore(); // 外部Callback関数
      }
    };
    document.addEventListener("mouseleave", handleEvent);
    return () => {
      document.removeEventListener("mouseleave", handleEvent); // cleanUp
    };
  }, [onBefore]);
};
