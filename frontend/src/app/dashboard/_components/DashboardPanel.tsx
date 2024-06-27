import { GetUserQuery } from "@/api/user";
import { Calendar, ClipboardPlus, Loader, Timer } from "lucide-react";
import React from "react";
import WeekPicker from "./Calandar";
import Image from "next/image";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Mymeetings } from "@/api/meeting";
function DashboardPanel() {
  const { isLoading, data: userData } = GetUserQuery();

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  const percentage = 66;
  return (
    <div className="m-5">
      <div className="text-3xl font-semibold mb-4">Hi, {userData?.name}.</div>
      <span className="text-gray-500 font-semibold mt-10">
        Let's track your health daily!
      </span>
      <div className="flex">
        <div className="w-[70%]  p-3">
          <div className="font-semibold mb-6 mt-5">
            Your Comming Appointments
          </div>
          <div className="flex gap-4  p-3">
            <div>
              <Image
                className="rounded-xl"
                alt=""
                width={200}
                height={200}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hospital-de-Bellvitge.jpg/800px-Hospital-de-Bellvitge.jpg"
              />
              <div className="mt-2">
                <div>Ruby Hospital</div>
                <div>Kasba, Kolkata</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <ClipboardPlus />
                <div className="flex flex-col">
                  Dr Souvik sen
                  <span className="text-gray-500">Physicist</span>
                </div>
              </div>

              <div className="flex justify-between w-[450px] bg-gray-100 p-3 rounded-xl">
                <div className="flex gap-2 items-center">
                  <div className="bg-white rounded-full p-1">
                    <Calendar className="text-blue-400" />
                  </div>
                  26 th jan 2024
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-white rounded-full p-1">
                    <Timer className="text-orange-400" />
                  </div>
                  <div>09:00 AM</div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex w-full justify-between mt-5">
            <div>
              <div>Patient Activites</div>
              <div>Today 26th June ,2024</div>
            </div>
            <div className="w-[24%]  bg-gradient-to-t p-5 from-green-200 to-green-400  ">
              <div className="text-center font-semibold mb-5 ">
                Daily Progress
              </div>

              <CircularProgressbar
                value={percentage}
                className="w-10"
                text={`${percentage}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: `#729762`,
                  textColor: "black",
                  trailColor: "white",
                  backgroundColor: "#597445",
                })}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-start mb-3">Your Daily Routine</h1>
          <div className="border border-gray-300 rounded-xl">
            <WeekPicker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPanel;
