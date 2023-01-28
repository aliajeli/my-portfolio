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
        "w-full flex flex-col gap-3 p-3 text-xs sm:text-sm text-dark dark:text-light duration-700" +
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
      <div className="bg-accent h-[1px] w-full" />
    </section>
  );
};
export default Section;
