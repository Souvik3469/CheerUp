"use client";
import { fetchMyEvents, fetchevents } from "@/api/ngo";
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
import React, { useEffect, useState } from "react";
import Loading from "./Loader";
import Event from "../NGO/allEvents/components/Event";

function Sidebar() {
  const [events, setEvents] = useState([]);

  const [myevents, setMyEvents] = useState([]);
  const {
    isLoading: EventLoading,
    data: eventdata,
    isError: EventError,
  } = fetchevents();

  const {
    isLoading: MyEventLoading,
    data: myeventdata,
    isError: MyEventError,
  } = fetchMyEvents();

  useEffect(() => {
    if (!EventLoading) {
      setEvents(eventdata.message);
    }
    if (!MyEventLoading) {
      setMyEvents(myeventdata.message);
    }
  }, [EventLoading, MyEventLoading]);
  if (EventError || MyEventError) {
    return (
      <div>
        <div>Error Loading ...</div>
      </div>
    );
  }
  if (EventLoading || MyEventLoading) {
    return <Loading />;
  }
  // const checkExistence = (id) => {
  //   return myevents.some((ev) => ev.id === id);
  // };
  // const getUserDetails = GetUserQuery();
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
      <div className=" w-[300px] h-screen overflow-scroll">
        <div className="primary-container mt-4 ">
          <div className="text-center font-serif text-4xl">All Ngo Events</div>
          <hr className="my-5" />
          <div className="grid grid-cols-1 p-4 gap-10">
            {events?.length > 0 ? (
              events?.map((ev: any) => (
                <Event
                  id={ev.id}
                  name={ev.name!}
                  description={ev?.description!}
                  funding={ev.funding!}
                  location={ev.location!}
                  startDate={
                    ev.date && ev.date[0] && ev.date[0].date.substr(0, 10)!
                  }
                  // d_option={checkExistence(ev.id)}
                />
              ))
            ) : (
              <div>""</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
