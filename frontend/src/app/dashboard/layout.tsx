import React, { FC } from "react";
import Sidebar from "./_components/sidebar";

interface PageProps {
  children: React.ReactNode;
}

const Layout: FC<PageProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex-none hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-auto p-1">{children}</div>
    </div>
  );
};

export default Layout;
