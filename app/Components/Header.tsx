"use client";
import { MdHighlightOff, MdContactPage, MdMenu } from "react-icons/md";

import Logo from "./SVG/Logo";

const Header = ({ className }: { className: string }) => {
  const menuToggleHandler = () => {
    const body = document?.querySelector("body") as HTMLBodyElement;
    body?.classList.toggle("menu");
    body?.classList.remove("resume");
  };
  const resumeToggleHandler = () => {
    const body = document?.querySelector("body") as HTMLBodyElement;
    body?.classList.toggle("resume");
    body?.classList.remove("menu");
  };

  return (
    <header
      className={
        className +
        " " +
        "flex flex-wrap content-center justify-between px-4 border-b xl:border-x border-accent/30 xl:rounded-b-lg xl:place-content-center"
      }
    >
      <button
        onClick={resumeToggleHandler}
        className="relative cursor-pointer w-12 h-12 z-10 xl:hidden"
      >
        <MdContactPage
          className="w-full h-full fill-accent absolute top-0 left-0 opacity-100
        group-[.resume]/aside:opacity-0"
        />
        <MdHighlightOff
          className="w-full h-full fill-accent absolute top-0 left-0 opacity-0 
        group-[.resume]/aside:opacity-100"
        />
      </button>

      <Logo className="fill-accent h-12" />
      <button
        onClick={menuToggleHandler}
        className="relative cursor-pointer w-12 h-12 z-10 xl:hidden"
      >
        <MdMenu
          className="w-full h-full fill-accent absolute top-0 left-0 opacity-100
        group-[.menu]/aside:opacity-0 group-[.resume]/aside:opacity-0"
        />
        <MdHighlightOff
          className="w-full h-full fill-accent absolute top-0 left-0 opacity-0 
        group-[.menu]/aside:opacity-100"
        />
      </button>
    </header>
  );
};
export default Header;
