import React from "react";

type ProjectTagProps = {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
};

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? "bg-primary-500 text-white"
    : "text-[#adb7be] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
