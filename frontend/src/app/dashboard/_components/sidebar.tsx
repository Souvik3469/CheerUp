"use client";
import { GetUserQuery } from "@/api/user";
import { Tooltip } from "@mui/material";
import {
  Calendar,
  Home,
  LayoutDashboard,
  Settings,
  SquareMenu,
  BookOpenCheck,
  FilePlus,
  ReceiptText,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Sidebar() {
  const getUserDetails = GetUserQuery();
  return (
    <div className="flex">
      <div className="flex flex-col gap-10 p-5 h-screen bg-stone-900">
        <Tooltip title="Dashboard">
          <LayoutDashboard className="text-white" />
        </Tooltip>
        <Tooltip title="Home">
          <Link href="/">
            <Home className="text-white" />
          </Link>
        </Tooltip>
        <Tooltip title="Calender">
          <Calendar className="text-white" />
        </Tooltip>
        <Tooltip title="Meetings">
          <Link href="/dashboard/meeting">
            {" "}
            <SquareMenu className="text-white" />
          </Link>
        </Tooltip>
        <Tooltip title="My Tasks">
          <Link href="/dashboard/dailytask" className="text-white">
            <BookOpenCheck className="text-white" />
          </Link>
        </Tooltip>
        <Tooltip title="create NGO evets">
          <Link href="/dashboard/NGO/createEvent" className="text-white">
            <FilePlus className="text-white" />
          </Link>
        </Tooltip>
        <Tooltip title="all NGO evets">
          <Link href="/dashboard/NGO/allEvents" className="text-white">
            <ReceiptText className="text-white" />
          </Link>
        </Tooltip>
        <Tooltip title="Settings">
          <Settings className="text-white" />
        </Tooltip>
      </div>
      <div className="bg-blue-300 w-[300px] h-screen">a</div>
    </div>
  );
}

export default Sidebar;
