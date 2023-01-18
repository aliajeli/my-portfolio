import TitleDescription from "./TitleDescription";

const ProgressBar = ({
  className,
  title,
  value,
}: {
  className: string;
  title: string;
  value: number;
}) => {
  const width = value.toString() + "%";
  return (
    <section className="flex flex-col w-full">
      <TitleDescription
        title={title}
        description={"%" + value}
        className="px-1"
      />
      <div
        className={
          "w-full h-3 rounded-full p-0.5 border-2 border-accent " +
          " " +
          className
        }
      >
        <div
          className={"h-full rounded-full bg-accent "}
          style={{ width: width }}
        ></div>
      </div>
    </section>
  );
};
export default ProgressBar;
