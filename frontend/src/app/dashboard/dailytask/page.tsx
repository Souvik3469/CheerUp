"use client";
import { completeTask, getMyDailyTaskQuery } from "@/api/tasks";
import React, { useEffect, useState } from "react";
import Loading from "../_components/Loader";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

function page() {
  const [taskSet, setTaskSet] = useState();
  const complete = async (id) => {
    try {
      const data = await completeTask(id);
      console.log(data, "data");
    } catch (err) {
      toast(err?.response.data.error);
    }
  };
  const { data: myTaskSet, isLoading: taskSetLoading } = getMyDailyTaskQuery();
  console.log(myTaskSet?.taskSet, "mytasks");
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
    setTaskSet(myTaskSet?.taskSet);
    console.log(taskSet, "mytask");
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

  return (
    <div className="">
      {taskSetLoading ? (
        <Loading />
      ) : (
        <div className="bg-slate-200 p-10 flex flex-col gap-5 ">
          <div></div>
          <div className="text-center font-comf font-semibold text-4xl">
            {taskSet?.name}{" "}
            {/* <span className=" text-theme">Consultors</span> */}
          </div>
          <div>
            {taskSet?.tasks?.map((task) => {
              const j = getStartDate(myTaskSet?.startDate, task.day).month;
              return (
                <div className="bg-white rounded-xl p-4 m-5 ">
                  <div className="text-3xl font-semibold">{task.title}</div>
                  <div>{task?.description}</div>
                  <div>{task?.status} </div>
                  {task?.status === "completed" ? (
                    ""
                  ) : (
                    <>
                      <div className="flex gap-1">
                        <div className="font-semibold">Opening on : </div>
                        <div>
                          {getStartDate(myTaskSet?.startDate, task.day).day}
                        </div>
                        <div>{getMonthName(j)}</div>
                      </div>
                    </>
                  )}

                  {task?.status !== "completed" ? (
                    <Button
                      onClick={() => {
                        complete(task.id);
                      }}
                    >
                      complete Task
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
