import { PropsWithChildren, ReactElement } from "react";

export default function Header({
  children,
}: PropsWithChildren<unknown>): ReactElement {
  return (
    <header className="flex flex-col justify-center px-16 py-5 shadow-2xl border text-black bg-white max-md:px-3">
      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full">
        <h1 className="my-auto text-lg font-semibold">MatchCast</h1>
        <button className="justify-center px-8 py-2 bg-blue-600 text-white shadow-lg rounded-[32px] max-md:px-2">
          Explore NFTs
        </button>
      </div>
    </header>
  );
}
