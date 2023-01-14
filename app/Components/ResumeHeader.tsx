import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

const ResumeHeader = ({ className }: { className?: string }) => {
  return (
    <section
      className={
        "relative flex flex-col auto-rows-min flex-wrap items-center gap-3" +
        " " +
        className
      }
    >
      <div className="w-40 h-40 absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden bg-dark dark:bg-light rounded-full z-20 border-4 border-accent">
        <Image src="/User.png" alt="User" width={160} height={160} />
      </div>
      <div className="w-40 h-40 border animate-ping border-accent bg-dark dark:bg-light rounded-full" />
      <h2 className="mx-auto text-lg text-dark dark:text-light font-semibold">
        Ali Ajeli Lahiji
      </h2>
      <h2 className="mx-auto text-sm text-dark/50 dark:text-light/50 font-semibold">
        Frontend Developer
      </h2>
      <ul className="h-10 w-full flex flex-col flex-wrap place-content-center gap-3">
        <Link href="" className="">
          <FaGithub className="fill-accent w-full h-full" />
        </Link>
        <Link href="" className="">
          <FaLinkedinIn className="fill-accent w-full h-full" />
        </Link>
        <Link href="" className="">
          <FaTelegramPlane className="fill-accent w-full h-full" />
        </Link>
        <Link href="" className="">
          <FaInstagram className="fill-accent w-full h-full" />
        </Link>
      </ul>
    </section>
  );
};
export default ResumeHeader;
