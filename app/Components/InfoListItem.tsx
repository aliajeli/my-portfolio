const InfoListItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <li className="flex justify-between">
      <span className="">{title} :</span>
      <span className="">{description}</span>
    </li>
  );
};
export default InfoListItem;
