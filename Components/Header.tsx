"use client";
import Logo from "./SVG/Logo";
import { Roboto } from "@next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "500", style: "italic" });

import {
  RiProfileFill,
  RiArrowLeftSLine,
  RiMenuLine,
  RiMenuUnfoldLine,
} from "react-icons/ri";

const Header = ({ className }: { className: string }) => {
  const menuToggleHandler = () => {
    const body = document?.querySelector("body") as HTMLBodyElement;
    body?.classList.toggle("menu");
    body?.classList.remove("about");
  };
  const aboutToggleHandler = () => {
    const body = document?.querySelector("body") as HTMLBodyElement;
    body?.classList.toggle("about");
    body?.classList.remove("menu");
  };

  return (
    <header
      className={
        className +
        " " +
        "flex flex-wrap content-center justify-between px-4 border-b lg:border-x border-accent/30 lg:rounded-b-lg duration-700"
      }
    >
      <section>
        <button
          onClick={aboutToggleHandler}
          className="relative cursor-pointer w-12 h-12 z-50 2xl:hidden"
        >
          <RiProfileFill
            className="w-4/6 h-4/6 fill-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100
        group-[.about]/aside:opacity-0 duration-700"
          />
          <RiArrowLeftSLine
            className="w-4/6 h-4/6 fill-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0
          group-[.about]/aside:opacity-100 duration-700"
          />
        </button>
      </section>
      <section className="flex flex-wrap gap-4 items-center text-accent font-bold text-2xl animate-pulse">
        <Logo className="fill-accent h-12" />
        <h1 className={roboto.className}>Ali Ajeli Lahiji</h1>
      </section>
      <section>
        <button
          onClick={menuToggleHandler}
          className="relative cursor-pointer w-12 h-12 z-10 lg:hidden"
        >
          <RiMenuLine
            className="w-4/6 h-4/6 fill-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100
        group-[.menu]/aside:opacity-0 group-[.about]/aside:opacity-0 duration-700"
          />
          <RiMenuUnfoldLine
            className="w-4/6 h-4/6 fill-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 
        group-[.menu]/aside:opacity-100 duration-700"
          />
        </button>
      </section>
    </header>
  );
};
export default Header;
