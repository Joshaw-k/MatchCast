import { ConnectButton } from "@rainbow-me/rainbowkit";
import { PropsWithChildren, ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Header({
  children,
}: PropsWithChildren<unknown>): ReactElement {
  return (
    <header className="flex flex-col justify-center px-16 py-5 shadow-2xl border text-black bg-white max-md:px-3">
      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full">
        <Link to="/" className="my-auto text-lg font-semibold">MatchCast</Link>
        <div className="m-auto flex gap-10 text-sm text-gray-800">
          <Link to="/collections">Collections</Link>
          <Link to="/match">Match</Link>
          <Link to="/conversations">Conversations</Link>
          <Link to="/explore">Explore</Link>
        </div>
        <ConnectButton />
      </div>
    </header>
  );
}
