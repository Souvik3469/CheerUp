import React, { FC } from "react";
import { Avatar, AvatarGroup, Button } from "@mui/material";
import Link from "next/link";
import { blue } from "@mui/material/colors";
interface consultantCardProps {
  id: string;
  name: string;
  phonenumber: string;
  email: string;
}

const ConsultantCard: FC<consultantCardProps> = ({
  id,
  name,
  phonenumber,
  email,
}) => {
  return (
    <div className=" bg-slate-100 flex flex-col shadow-lg rounded-lg items-start transition ease-in hover:-translate-y-1 ">
      <div className=" w-full flex justify-between items-center">
        <div className="px-5 py-2 font-comf gap-2 text-lg font-semibold ">
          <p className="">
            Mentor : <span className="font-normal">{name}</span>
          </p>
          <p className="">
            Phone Number: <span className="font-normal">{phonenumber}</span>
          </p>
          <p className="">
            Email: <span className="font-normal">{email}</span>
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Avatar
            sx={{
              height: "4.2vmax",
              width: "4.2vmax",
              fontSize: "2vmax",
              bgcolor: blue[300],
            }}
            alt={name}
            src="/static/images/avatar/1.jpg"
          />
        </div>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <Link href={`/dashboard/meeting/${id}`}>
          <Button
            variant="contained"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
          >
            Book a Call
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ConsultantCard;
