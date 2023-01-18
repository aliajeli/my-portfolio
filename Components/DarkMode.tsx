"use client";

import { RiMoonFill, RiSunFill } from "react-icons/ri";

const DarkMode = ({ className }: { className: string }) => {
  const onClickHandler = () => {
    document.querySelector("html")?.classList.toggle("dark");
  };

  return (
    <button
      onClick={onClickHandler}
      className="w-12 h-12 relative mx-auto cursor-pointer"
    >
      <RiMoonFill
        className={
          className +
          " dark:rotate-180 dark:opacity-0 duration-500 opacity-100 transition-all"
        }
      />
      <RiSunFill
        className={
          className +
          " dark:rotate-180 dark:opacity-100 duration-500 opacity-0 transition-all"
        }
      />
    </button>
  );
};
export default DarkMode;
