"use client";
import { useInput } from "@/app/hooks/useInput";

export const HookTest = () => {
  const maxLength = (value: string | number) => value.toString().length <= 10;
  const data = useInput("input text", maxLength);

  return (
    <main>
      <h1>hooks-box</h1>
      {/* hook1. useInput */}
      <section>
        <h2>hook1. useInput</h2>
        <input type="text" placeholder="what is your name?" {...data} />
        <p className="c-input-info">最大１０文字まで入力できます</p>
      </section>
      <hr />
    </main>
  );
};
