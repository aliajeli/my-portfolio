import NavLink from "./NavLink";

const NavItem = ({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NavLink
      className="group/nav grid gap-2"
      href={href}
      activeClassName=" active"
    >
      {children}
      <span
        className="
        opacity-0 -translate-y-10 bg-dark dark:bg-light transition-colors duration-500 mx-auto text-center text-light dark:text-dark w-3/4 rounded-md 
      group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:duration-500
      group-[.active]/nav:opacity-100 group-[.active]/nav:translate-y-0 
      before:w-2 before:h-2 dark:before:bg-light before:bg-dark before:absolute relative before:-top-1 before:left-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-tl-sm before:transition-colors before:duration-500 "
      >
        {title}
      </span>
    </NavLink>
  );
};
export default NavItem;
