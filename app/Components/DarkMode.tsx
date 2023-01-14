"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";

const DarkMode = ({ className }: { className: string }) => {
  const onClickHandler = () => {
    document.querySelector("html")?.classList.toggle("dark");
  };

  return (
    <button
      onClick={onClickHandler}
      className="w-12 h-12 relative mx-auto cursor-pointer"
    >
      <MdDarkMode
        className={
          className +
          " dark:rotate-180 dark:opacity-0 duration-500 opacity-100 transition-all"
        }
      />
      <MdLightMode
        className={
          className +
          " dark:rotate-180 dark:opacity-100 duration-500 opacity-0 transition-all"
        }
      />
    </button>
  );
};
export default DarkMode;
