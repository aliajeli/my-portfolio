type Props = {
  sectionClassName?: string;
  title: string;
  titleClassName?: string;
  className?: string;
  children: React.ReactNode;
};
const Section = ({
  sectionClassName,
  title,
  titleClassName,
  className,
  children,
}: Props) => {
  return (
    <section
      className={
        "w-full flex flex-col gap-2 p-3 bg-light dark:bg-dark text-xs sm:text-sm " +
        " " +
        sectionClassName
      }
    >
      <header className={"text-lg font-semibold mb-1" + " " + titleClassName}>
        {title}
      </header>
      <ul className={"w-full flex flex-col gap-2 py-2" + " " + className}>
        {children}
      </ul>
    </section>
  );
};
export default Section;
