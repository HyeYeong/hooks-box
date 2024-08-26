"use client";
import { useInput } from "@/app/hooks/useInput";

export const HookTest = () => {
  const maxLength = (value: string | number) => value.toString().length <= 10;

  const data = useInput("hello? ", maxLength);
  return (
    <main>
      <h1>hooks-box</h1>
      <div>
        <h2>useInput</h2>
        <input type="text" placeholder="name" {...data} />
      </div>
    </main>
  );
};
