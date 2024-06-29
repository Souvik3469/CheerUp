import { GetUserQuery } from "@/api/user";
import { Calendar, ClipboardPlus, Loader, Timer } from "lucide-react";
import React, { useEffect, useState } from "react";
import WeekPicker from "./Calandar";
import Image from "next/image";
import taskanimation from "@/assets/gifs/gif1.json";
import Lottie from "react-lottie-player";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Mymeetings } from "@/api/meeting";
import { getMyDailyTaskQuery, startMyTask } from "@/api/tasks";
import { Button } from "@/components/ui/button";
function DashboardPanel() {
  const { isLoading, data: userData } = GetUserQuery();
  const { data: myTaskSet, isLoading: taskSetLoading } = getMyDailyTaskQuery();
  const [completedTasks, setCompletedTask] = useState([]);
  console.log(myTaskSet?.taskSet, "mytasks");
  const completedTask = () => {
    const data = myTaskSet?.taskSet.tasks;
    const filteredData = data?.filter((d) => d.status === "completed");
    console.log(filteredData, "f");
    setCompletedTask(filteredData);
  };
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getMonthName = (monthIndex) => {
    return monthNames[monthIndex];
  };
  useEffect(() => {
    completedTask();
  }, [taskSetLoading]);
  const getStartDate = (startDate, next): any => {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + next - 1);

    // console.log(newDate.m());
    const data = {
      day: newDate.getDate(),
      month: newDate.getMonth(),
      time: newDate.getTime(),
    };
    return data;
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  const percentage = 66;
  const startTracking = async () => {
    const { data } = await startMyTask();
    console.log(data, "data from startmeeting");
  };
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

              <div className="flex justify-between  bg-gray-100 p-3 rounded-xl">
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
            <div className="flex flex-col">
              <div>
                <div className=" font-comf font-semibold text-3xl">
                  Patient Activites
                </div>
              </div>
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
          <div className="py-20">
            <div>
              <div className=" font-comf font-semibold text-2xl mb-5">
                Complteted Tasks
              </div>
            </div>
            {completedTasks &&
              completedTasks.map((com) => {
                const j = getStartDate(myTaskSet?.startDate, com.day).month;
                return (
                  <div>
                    <div
                      className=" border border-gray-300 rounded-3xl
                         p-2 w-[400px] rounded-xl"
                    >
                      {com.description}
                      <Lottie
                        loop
                        animationData={taskanimation}
                        play
                        style={{ width: 150, height: 150 }}
                      />
                      <div className="flex gap-2 text-right items-end justify-end text-sm font-bold">
                        <div className="FONT">
                          Task completed on{" "}
                          {getStartDate(myTaskSet?.startDate, com.day).day}
                        </div>
                        <div>{getMonthName(j)}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <h1 className="text-start mb-3">Your Daily Routine</h1>
          <div className="border border-gray-300 rounded-xl">
            <WeekPicker completedTasks={completedTasks} />
          </div>
          {myTaskSet?.taskSet ? (
            ""
          ) : (
            <Button
              onClick={() => {
                startTracking();
              }}
              className="mt-4"
            >
              Start Your Progress Tracking
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPanel;
