type Props = {
  sectionClassName?: string;
  title?: string;
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
      {title && (
        <h2 className={"text-lg font-semibold mb-1" + " " + titleClassName}>
          {title}
        </h2>
      )}

      <section className={"w-full flex flex-col gap-2 py-2" + " " + className}>
        {children}
      </section>
    </section>
  );
};
export default Section;
