import React from "react";

interface InnerContentBoxProps {
  children: React.ReactNode;
  title: string;
}

const InnerContentBox = ({ children, title }: InnerContentBoxProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl font-semibold text-white">{title}</div>
      <div className="bg-secondary px-2 py-2">{children}</div>
    </div>
  );
};

export default InnerContentBox;
