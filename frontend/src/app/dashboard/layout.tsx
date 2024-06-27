import React, { FC } from "react";

import Sidebar from "./_components/sidebar";
interface PageProps {
  children: React.ReactNode;
}
const layout: FC<PageProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        {" "}
        <div className="bg-blue-300 w-[300px] h-screen">a</div>
      </div>
      <div className=" w-full">{children}</div>
    </div>
  );
};

export default layout;
