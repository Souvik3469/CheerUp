import { fetchMyEvents, registerEvent } from "@/api/ngo";
import { Avatar, AvatarGroup, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
interface eventCardProps {
  id: String;
  name: String;
  description: String;
  funding: Number;
  location: String;
  startDate: String;
  d_option: Boolean;
}
const Event: FC<eventCardProps> = ({
  id,
  name,
  description,
  funding,
  location,
  startDate,
  d_option,
}) => {
  const handleJoinEvent = async () => {
    try {
      const data = registerEvent(id);
      fetchMyEvents();
      toast.success("You are successfully registered for the event");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-grey-300 h-25 flex flex-col  shadow-lg rounded-lg items-start transition ease-in hover:-translate-y-1">
      <div className="bg-gery-300 h-full flex ">
        <Image
          height={50}
          width={300}
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuZMsc_-2l-WqV3xpCTHqi76yBY3qmK4FAQ&s"
          src="https://static.vecteezy.com/system/resources/thumbnails/012/919/709/small_2x/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-vector.jpg"
          alt=""
        />
      </div>
      <div className="">
        <div className="px-3 py-1 gap-2 text-sm font-semibold">
          Event Name : <span className="font-sm"> {name}</span>
        </div>
        <div className="px-3 py-1 gap-2 text-sm font-semibold">
          Description : <span className="font-sm"> {description}</span>
        </div>
        <div className="px-3 py-1 gap-2 text-sm font-semibold">
          Funding : <span className="font-sm"> {funding}</span>
        </div>
        <div className="px-3 py-1 gap-2 text-sm font-semibold">
          <p>
            Event Location : <span className="font-sm"> {location}</span>
          </p>
          <p>
            {/* {console.log(startDate)} */}
            Event Date : <span className="font-sm"> {startDate}</span>
          </p>
        </div>

        <div className="px-5 py-4 flex">
          <div>
            {/* <Link href={`/dashboard/${id}`}> */}
            <Button
              variant="contained"
              className="bg-blue-500 hover:bg-blue-700 text-white h-12 font-semibold py-2 px-4 rounded-full"
              onClick={handleJoinEvent}
              disabled={d_option}
            >
              Join Event
            </Button>
            {/* </Link> */}
          </div>
          <div>
            <AvatarGroup max={4}>
              <Avatar
                sx={{ width: "1.4vmax", height: "1.4vmax", fontSize: "1vmax" }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Avatar
                sx={{ width: "1.4vmax", height: "1.4vmax", fontSize: "1vmax" }}
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
              />
              <Avatar
                sx={{ width: "1.4vmax", height: "1.4vmax", fontSize: "1vmax" }}
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
              />
              <Avatar
                sx={{ width: "1vmax", height: "1vmax" }}
                alt="Agnes Walker"
                src="/static/images/avatar/4.jpg"
              />
              <Avatar
                sx={{ width: "1.4vmax", height: "1.4vmax", fontSize: "1vmax" }}
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
