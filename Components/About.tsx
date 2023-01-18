// import { SocialIcon } from "react-social-icons";
import Section from "./Section";
import ProgressBar from "./ProgressBar";
import Link from "next/link";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTelegramFill,
  RiInstagramFill,
} from "react-icons/ri";

import Image from "next/image";
import TitleDescription from "./TitleDescription";
const About = () => {
  return (
    <aside
      className="absolute top-0 left-0 h-full p-2 pb-2 flex flex-col border-x border-0 border-accent/30 w-full bg-light dark:bg-dark -translate-x-full opacity-0 transition-all duration-700 xl:duration-150 z-40
    group-[.about]/aside:translate-x-0 group-[.about]/aside:opacity-100
    sm:w-96 
    2xl:relative 2xl:translate-x-0 2xl:opacity-100"
    >
      <Section className="py-0">
        <section className={"relative flex justify-between" + " "}>
          <section className="flex-[2] flex flex-col justify-center gap-3">
            <h2 className=" w-full text-lg text-center text-dark dark:text-light font-semibold">
              Ali Ajeli Lahiji
            </h2>
            <h2 className=" w-full text-sm text-center text-dark/50 dark:text-light/50 font-semibold">
              Frontend Developer
            </h2>
            <section className="h-10 w-full flex justify-evenly">
              <Link href="" className="">
                <RiLinkedinBoxFill className="fill-accent w-8 h-8" />
              </Link>
              <Link href="" className="">
                <RiGithubFill className="fill-accent w-8 h-8" />
              </Link>
              <Link href="" className="">
                <RiTelegramFill className="fill-accent w-8 h-8" />
              </Link>
              <Link href="" className="">
                <RiInstagramFill className="fill-accent w-8 h-8" />
              </Link>
            </section>
          </section>
          <div className="w-36 h-36 rounded-lg border-4 border-accent bg-dark dark:bg-light overflow-hidden">
            <Image src="/User.png" alt="User" width={144} height={144} />
          </div>
        </section>
      </Section>
      <section className="flex-[2] w-full mx-auto bg-accent/50 overflow-y-scroll scrollbar-thin scrollbar-track-accent/10 scrollbar-thumb-accent grid grid-flow-row gap-[1px] py-[1px]">
        <Section title="My Info">
          <TitleDescription title="Birthday :" description="21 Mar 1990" />
          <TitleDescription title="Age :" description="32" />
          <TitleDescription title="Degree :" description="Bachelor" />
          <TitleDescription title="Freelance :" description="Available" />
          <TitleDescription title="City :" description="Lahijan" />
          <TitleDescription title="Phone :" description="+98-930 410 4962" />
        </Section>
        <Section title="Main Skills" className="grid  grid-flow-row">
          <ProgressBar className="" title="HTML" value={90} />
          <ProgressBar className="" title="CSS" value={80} />
          <ProgressBar className="" title="Tailwind" value={90} />
          <ProgressBar className="" title="JavaScript" value={70} />
          <ProgressBar className="" title="React.js" value={60} />
          <ProgressBar className="" title="Next.js" value={60} />
        </Section>
        {/* <Section title="Experiance"></Section> */}
      </section>
      <button className="h-10 w-40 bg-cta text-light dark:text-dark border border-cta rounded-full mx-auto mt-2">
        Download CV
      </button>
    </aside>
  );
};
export default About;
