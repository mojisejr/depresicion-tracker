import React from "react";

interface ContentHeaderProps {
  left: string;
  right: string;
}

const ContentHeader = ({ left, right }: ContentHeaderProps) => {
  return (
    <div className="flex items-center">
      <span className="text-2xl font-semibold">{left ?? "N/A"}</span>
      <div className="flex-grow border-t-[1.5px] border-primary mx-2"></div>
      <div>{right}</div>
    </div>
  );
};

export default ContentHeader;
