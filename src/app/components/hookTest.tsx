"use client";
import { useInput } from "@/app/hooks/useInput";
import { CurrentItem, useTabs } from "@/app/hooks/useTabs";
import { useClick } from "../hooks/useClick";

export const HookTest = () => {
  const maxLength = (value: string | number) => value.toString().length <= 10;
  const data = useInput("input text", maxLength);
  const contents: CurrentItem[] = [
    { tab: "section 1", content: "I am the content of the section 1" },
    { tab: "section 2", content: "I am the content of the section 2" },
    { tab: "section 3", content: "I am the content of the section 3" },
  ];

  const tabHook = useTabs(0, contents);
  const sayHello = () => console.log("sayhello");
  const FocusElement = useClick(sayHello);

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
      {/* hook2. useTabs */}
      <section>
        <h2>hook2. useTabs</h2>
        {contents.map(({ tab, content }, index: number) => (
          <button key={tab} onClick={() => tabHook.setCurrentIndex(index)}>
            {tab}
          </button>
        ))}
        <div>
          <h3>{tabHook.currentItem.tab}</h3>
          <p>{tabHook.currentItem.content}</p>
        </div>
      </section>
      <section>
        <h2>hook3. useClick</h2>
        <button ref={FocusElement}>say hello on console</button>
      </section>
    </main>
  );
};
