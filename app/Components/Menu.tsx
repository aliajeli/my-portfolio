import { Ms_Madi } from "@next/font/google";
import NavItem from "./NavItem";
import DarkMode from "./DarkMode";
import {
  MdHomeFilled,
  MdDashboard,
  MdArticle,
  MdAccountBox,
  MdTranslate,
  MdInfo,
} from "react-icons/md";

const msMadi = Ms_Madi({ subsets: ["latin"], weight: "400" });
const Menu = ({ className }: { className: string }) => {
  return (
    <aside
      className={
        "translate-x-full border-l border-accent/30 opacity-0 transition-all w-28 h-full absolute top-0 right-0 bg-light dark:bg-dark grid items-center duration-700 " +
        "group-[.menu]/aside:translate-x-0 group-[.menu]/aside:opacity-100 " +
        "xl:relative xl:translate-x-0 xl:opacity-100 xl:border-x-[1px] " +
        " " +
        className
      }
    >
      <DarkMode className="fill-accent absolute top-0 left-0 w-12 h-12 mb-20" />
      <nav className="grid gap-2 grid-flow-row text-sm">
        <NavItem title="Home" href="/">
          <MdHomeFilled className="fill-accent mx-auto w-12 h-12" />
        </NavItem>
        <NavItem title="About" href="/about">
          <MdInfo className="fill-accent mx-auto w-12 h-12" />
        </NavItem>
        <NavItem title="Projects" href="/projects">
          <MdDashboard className="fill-accent mx-auto w-12 h-12" />
        </NavItem>
        <NavItem title="Blog" href="/blog">
          <MdArticle className="fill-accent mx-auto w-12 h-12" />
        </NavItem>
        <NavItem title="Contact" href="/contact">
          <MdAccountBox className="fill-accent mx-auto w-12 h-12" />
        </NavItem>
      </nav>
      <MdTranslate className="fill-accent mx-auto w-12 h-12" />
    </aside>
  );
};
export default Menu;
