import React from "react";
import { Dancing_Script } from "@next/font/google";
import Coding from "./Components/SVG/Coding";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className="bg-light dark:bg-dark border-0 xl:border border-accent/30 xl:rounded-lg grid grid-rows-[50%_50%] xl:grid-rows-1 xl:grid-cols-[50%_50%]">
      <Coding className="fill-accent h-full max-w-[90%] mx-auto" />
      <section className="text-2xl flex flex-col flex-wrap place-content-center gap-16">
        <h2 className="text-center">
          I'm{" "}
          <span
            className={
              dancingScript.className + " " + "font-black text-4xl text-accent"
            }
          >
            Ali Ajeli Lahiji
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
