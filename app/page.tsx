import React from "react";
import Coding from "../Components/SVG/Coding";
import { Roboto } from "@next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "500", style: "italic" });

const Home = () => {
  return (
    <main className="bg-light dark:bg-dark border-0 border-accent/30 flex flex-col lg:rounded-lg md:flex-row lg:border text-dark dark:text-light duration-700">
      <section className="h-full w-full grid place-items-center">
        <Coding className="fill-accent w-3/4" />
      </section>
      <section className="text-2xl flex flex-col flex-wrap justify-evenly h-full w-full">
        <h2 className="text-center">
          {"I'm "}
          <span
            className={
              roboto.className + " " + "font-black text-4xl text-accent px-3"
            }
          >
            {"Ali Ajeli Lahiji"}
          </span>
        </h2>
        <h3 className="text-center">Frontend Developer from</h3>
        <h3 className="text-5xl text-center font-black bg-gradient-to-b from-green-500 via-white to-red-500 text-transparent bg-clip-text tracking-[0.4em] -mr-[0.4em]">
          IRAN
        </h3>
      </section>
    </main>
  );
};
export default Home;
