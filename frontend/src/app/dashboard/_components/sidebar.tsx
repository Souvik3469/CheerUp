import {
  Calendar,
  Home,
  LayoutDashboard,
  Settings,
  SquareMenu,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-10 p-5 h-screen bg-stone-900">
        <LayoutDashboard className="text-white" />
        <Link href="/">
          <Home className="text-white" />
        </Link>
        <Calendar className="text-white" />
        <Link href="/dashboard/meeting">
          {" "}
          <SquareMenu className="text-white" />
        </Link>
        <Link href="/dashboard/dailytask" className="text-white">
          My Task
        </Link>
        <Settings className="text-white" />
      </div>
      <div className="bg-blue-300 w-[300px] h-screen">a</div>
    </div>
  );
}

export default Sidebar;
