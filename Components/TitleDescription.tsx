const TitleDescription = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <h4 className={"flex justify-between" + " " + className}>
      <span className="">{title}</span>
      <span className="">{description}</span>
    </h4>
  );
};
export default TitleDescription;
