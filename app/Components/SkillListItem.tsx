import ProgressBar from "./ProgressBar";

const SkillListItem = ({ skill, value }: { skill: string; value: number }) => {
  return (
    <li className="flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="">{skill} :</span>
        <span className="">{value}%</span>
      </div>
      <ProgressBar className="" value={value.toString() + "%"} />
    </li>
  );
};
export default SkillListItem;
