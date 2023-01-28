import NavItem from "./NavItem";
import DarkMode from "./DarkMode";
import {
  RiHome5Fill,
  RiAccountBoxFill,
  RiLayoutMasonryFill,
  RiArticleFill,
  RiTranslate2,
} from "react-icons/ri";
const Menu = ({ className }: { className: string }) => {
  return (
    <aside
      className={
        "translate-x-full border-l border-accent/30 opacity-0 transition-all w-28 h-full absolute top-0 right-0 bg-light dark:bg-dark flex flex-col justify-evenly duration-700 " +
        "group-[.menu]/aside:translate-x-0 group-[.menu]/aside:opacity-100 " +
        "lg:relative lg:translate-x-0 lg:opacity-100 lg:border-x-[1px] " +
        " " +
        className
      }
    >
      <DarkMode className="fill-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 mb-20" />

      <nav className="grid gap-2 grid-flow-row text-sm">
        <NavItem title="Home" href="/">
          <RiHome5Fill className="fill-accent mx-auto w-8 h-8" />
        </NavItem>
        <NavItem title="Projects" href="/projects">
          <RiLayoutMasonryFill className="fill-accent mx-auto w-8 h-8" />
        </NavItem>
        <NavItem title="Blog" href="/blog">
          <RiArticleFill className="fill-accent mx-auto w-8 h-8" />
        </NavItem>
        <NavItem title="Contact" href="/contact">
          <RiAccountBoxFill className="fill-accent mx-auto w-8 h-8" />
        </NavItem>
      </nav>

      <RiTranslate2 className="fill-accent mx-auto w-8 h-8" />
    </aside>
  );
};
export default Menu;
