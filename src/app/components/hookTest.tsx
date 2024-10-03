"use client";
import { useInput } from "@/app/hooks/useInput";
import { CurrentItem, useTabs } from "@/app/hooks/useTabs";
import { useClick } from "@/app/hooks/useClick";
import { useGithubRepos } from "@/app/hooks/useGetGithubRepos";
import { SyncLoader } from "react-spinners";
import { useConfirm } from "@/app/hooks/useConfirm";
import { MESSAGE } from "@/app/enums/text";
import { usePreventLeave } from "@/app/hooks/usePreventLeave";
import { useBeforeLeave } from "@/app/hooks/useBeforeLeave";

export const HookTest = () => {
  const maxLength = (value: string | number) => value.toString().length <= 10;
  const data = useInput("input text", maxLength);
  const { loginData, loading, error } = useGithubRepos("HyeYeong");
  const contents: CurrentItem[] = [
    { tab: "section 1", content: "I am the content of the section 1" },
    { tab: "section 2", content: "I am the content of the section 2" },
    { tab: "section 3", content: "I am the content of the section 3" },
  ];

  const tabHook = useTabs(0, contents);
  const sayHello = () => console.log("sayhello");
  const { element } = useClick(sayHello);
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const confirmFunc = () => {
    console.log(MESSAGE.Confirm);
  };
  const abortFunc = () => {
    console.log(MESSAGE.Cancel);
  };
  const confirmAction = useConfirm(MESSAGE.Question, confirmFunc, abortFunc);

  // useBeforeLeave(() => {});

  if (loading)
    return (
      <section>
        <SyncLoader color="#4D607B" />
      </section>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main>
      <section>
        <h2>profile</h2>
        {loginData && (
          <ul>
            <li className="profile-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={loginData.user.avatar_url || ""} alt="avatar_url" />
            </li>
            <li>NAME: {loginData.user.name}</li>
            <li>LOCATION: {loginData.user.location}</li>
            {loginData.user.repositories.nodes && (
              <li>
                REPOSITORIES({loginData.user.repositories.totalCount}):
                {loginData.user.repositories.nodes.map((node, index) => (
                  <span className="repo-name" key={index}>
                    {node.name}
                  </span>
                ))}
              </li>
            )}
            <br />
            <li>by. GraphQL Data - github my repo</li>
          </ul>
        )}
      </section>
      <hr />
      <hr />
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
      {/* hook3. useClick */}
      <section>
        <h2>hook3. useClick using Ref</h2>
        <button ref={element}>console hello button</button>
      </section>
      {/* hook4. useConfirm */}
      <section>
        <h2>hook4. useConfirm</h2>
        <button onClick={confirmAction}>
          delete the world?(show you only text)
        </button>
      </section>
      {/* hook5. usePreventLeave */}
      <section>
        <h2>hook5. usePreventLeave</h2>
        <p>If you click this button↓</p>
        <button onClick={enablePrevent}>you can protect this window</button>
        <button onClick={disablePrevent}>you cannot protect this window</button>
      </section>

      <hr />
    </main>
  );
};
