import React, { FC } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
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
      <div className="px-5 py-2 font-comf gap-2 text-md ">
        <p className="">{name}</p>
        <p className="">Phone Number: {phonenumber}</p>
        <p className="">Email: {email}</p>
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
