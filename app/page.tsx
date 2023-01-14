import React from "react";
import { Dancing_Script } from "@next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className="bg-light dark:bg-dark flex-[2] border-0 xl:border border-accent/30 xl:rounded-lg">
      <h1>Home Page </h1>
    </main>
  );
};
export default Home;
