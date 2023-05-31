import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen justify-center overflow-hidden">
      <div className="w-full overflow-y-auto border-x border-slate-500 md:max-w-2xl">
        {props.children}
      </div>
    </main>
  );
};
