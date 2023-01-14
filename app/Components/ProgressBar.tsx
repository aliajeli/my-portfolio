const ProgressBar = ({
  className,
  value,
}: {
  className: string;
  value: string;
}) => {
  return (
    <div
      className={
        "w-full h-1.5 rounded-full p-[1px] border border-accent " +
        " " +
        className
      }
    >
      <div
        className={"h-full rounded-full bg-accent "}
        style={{ width: value }}
      ></div>
    </div>
  );
};
export default ProgressBar;
