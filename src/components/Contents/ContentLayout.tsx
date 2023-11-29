import React from "react";

interface ContentLayoutProps {
  children: React.ReactNode;
}

function ContentLayout({ children }: ContentLayoutProps) {
  return <div className="mx-3 my-2 min-h-screen">{children}</div>;
}

export default ContentLayout;
