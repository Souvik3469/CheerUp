import React, { FC } from "react";
import Sidebar from "./_components/sidebar";

interface PageProps {
  children: React.ReactNode;
}

const Layout: FC<PageProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
