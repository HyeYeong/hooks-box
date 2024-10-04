"use client";

export const useNotification = (
  title: string,
  options?: { [key: string]: string }
): VoidFunction | undefined => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      //grantedの時は、ユーザに許可をもらう
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
    return fireNotification;
  };

  return fireNotification;
};
