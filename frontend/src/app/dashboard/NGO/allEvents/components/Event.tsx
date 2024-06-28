import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Event() {
  return (
    <div className="bg-slate-100 flex  shadow-lg rounded-lg items-start transition ease-in hover:-translate-y-1">
      <div>
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
        <div className="px-5 py-4 ">
          <Link href={"/"}>
            <Button
              variant="contained"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
            >
              Join Event
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          height={600}
          width={300}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuZMsc_-2l-WqV3xpCTHqi76yBY3qmK4FAQ&s"
          alt=""
        />
      </div>
    </div>
  );
}

export default Event;
