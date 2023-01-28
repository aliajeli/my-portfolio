import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <main className="bg-light dark:bg-dark border-0 border-accent/30 flex flex-col place-content-center lg:rounded-lg lg:border gap-5 duration-700">
      <h1 className="flex flex-col gap-5">
        <span className="block text-accent text-5xl text-center">Hooray!</span>
        <span className="block text-dark dark:text-light text-xl text-center duration-700">
          Your message has been sent successfully
        </span>
      </h1>
      <h2 className="block text-dark/50 dark:text-light/50 text-center duration-700">
        I will respond as soon as possible
      </h2>
      <Link
        href="/"
        className="mx-auto bg-accent px-8 py-3 rounded-full border-4 border-accent text-light dark:text-dark hover:text-accent hover:bg-light dark:hover:bg-dark dark:hover:text-accent duration-700"
      >
        Back to main page
      </Link>
    </main>
  );
};
export default Success;
