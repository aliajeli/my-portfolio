import Image from "next/image";
// import { SocialIcon } from "react-social-icons";
import InfoListItem from "./InfoListItem";
import Section from "./Section";
import SkillListItem from "./SkillListItem";
import {
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiRedux,
  SiGithub,
  SiFigma,
  SiAdobexd,
  SiNestjs,
} from "react-icons/si";

const Resume = () => {
  return (
    <aside
      className="absolute top-0 left-0 h-full pt-10 pb-2 flex flex-col border-x border-0 border-accent/30 w-full bg-light dark:bg-dark -translate-x-full opacity-0 transition-all duration-700 xl:duration-150 
    group-[.resume]/aside:translate-x-0 group-[.resume]/aside:opacity-100
    xl:relative xl:w-96 xl:translate-x-0 xl:opacity-100"
    >
      <section className="h- relative flex flex-col auto-rows-min flex-wrap items-center gap-3">
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
        <div className="h-10 w-full flex flex-col flex-wrap place-content-center gap-3">
          {/* <SocialIcon
            url="https://github.com/#"
            bgColor="transparent"
            fgColor="rgb(var(--color-accent))"
          />
          <SocialIcon
            url="https://linkedin.com/#"
            bgColor="transparent"
            fgColor="rgb(var(--color-accent))"
          />
          <SocialIcon
            url="https://instagram.com/#"
            bgColor="transparent"
            fgColor="rgb(var(--color-accent))"
          />
          <SocialIcon
            url="https://twitter.com/#"
            bgColor="transparent"
            fgColor="rgb(var(--color-accent))"
          />
          <SocialIcon
            url="https://telegram.com/#"
            bgColor="transparent"
            fgColor="rgb(var(--color-accent))"
          /> */}
        </div>
      </section>
      <section className="flex-[2] w-10/12 mx-auto bg-accent/50 overflow-y-scroll scrollbar-thin scrollbar-track-accent/10 scrollbar-thumb-accent grid grid-flow-row gap-[1px] py-[1px]">
        <Section title="My Info">
          <InfoListItem title="Birthday" description="21 Mar 1990" />
          <InfoListItem title="Age" description="32" />
          <InfoListItem title="Degree" description="Bachelor" />
          <InfoListItem title="Freelance" description="Available" />
          <InfoListItem title="City" description="Lahijan, gilan, Iran" />
          <InfoListItem title="Phone Number" description="+98-930 410 4962" />
        </Section>
        <Section title="Main Skills">
          <SkillListItem skill="Html" value={80} />
          <SkillListItem skill="Css" value={70} />
          <SkillListItem skill="Js" value={80} />
          <SkillListItem skill="React" value={60} />
          <SkillListItem skill="Next" value={50} />
        </Section>
        <Section
          title="Other Skills"
          className="grid grid-cols-4 gap-0 gap-y-5 place-items-center"
        >
          <li className="w-10 h-10">
            <SiNestjs className="w-full h-full fill-accent" />
          </li>
          <li className="w-10 h-10">
            <SiRedux className="w-full h-full fill-accent" />
          </li>
          <li className="w-10 h-10">
            <SiTypescript className="w-full h-full fill-accent" />
          </li>
          <li className="w-10 h-10">
            <SiTailwindcss className="w-full h-full fill-accent" />
          </li>
          <li className="w-10 h-10">
            <SiGithub className="w-full h-full fill-accent" />
          </li>
          <li className="w-10 h-10">
            <SiPrisma className="w-full h-full fill-accent" />
          </li>
          <li className="w-10 h-10">
            <SiFigma className="w-full h-full fill-accent" />
          </li>
          <li className="w-10 h-10">
            <SiAdobexd className="w-full h-full fill-accent" />
          </li>
        </Section>
      </section>
      <button className="h-10 w-40 bg-cta text-light dark:text-dark border border-cta rounded-full mx-auto mt-2">
        Download CV
      </button>
    </aside>
  );
};
export default Resume;