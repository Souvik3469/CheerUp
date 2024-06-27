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
      <Settings className="text-white" />
    </div>
  );
}

export default Sidebar;
