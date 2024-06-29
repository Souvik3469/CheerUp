import { Avatar, AvatarGroup, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Event() {
  return (
    <div className="bg-slate-100 flex  shadow-lg rounded-lg items-start transition ease-in hover:-translate-y-1">
      <div className="">
        <div className="px-5 py-3 gap-2 text-lg font-semibold">
          Event Name : <span className="font-normal"> World Vision</span>
        </div>
        <div className="px-5 py-3 gap-2 text-md font-semibold">
          <p>
            Event Location : <span className="font-normal"> Kolkata</span>
          </p>
          <p>
            Event Date : <span className="font-normal"> 11.02.2024</span>
          </p>
        </div>

        <div className="px-5 py-4 flex">
          <div>
            <Link href={"/"}>
              <Button
                variant="contained"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
              >
                Join Event
              </Button>
            </Link>
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
      <div className="bg-green-200 h-full flex ">
        <Image
          height={100}
          width={300}
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuZMsc_-2l-WqV3xpCTHqi76yBY3qmK4FAQ&s"
          src="https://static.vecteezy.com/system/resources/thumbnails/012/919/709/small_2x/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-vector.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Event;
