import React from "react";

interface ContentBoxProps {
  children: React.ReactNode;
}

const ContentBox = ({ children }: ContentBoxProps) => {
  return (
    <div className="bg-neutral px-2 py-2 flex flex-col gap-2">{children}</div>
  );
};

export default ContentBox;
