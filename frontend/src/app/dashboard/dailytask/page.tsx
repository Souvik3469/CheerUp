"use client";
import { getMyDailyTaskQuery } from "@/api/tasks";
import React, { useEffect, useState } from "react";
import Loading from "../_components/Loader";

function page() {
  const [taskSet, setTaskSet] = useState();

  const { data: myTaskSet, isLoading: taskSetLoading } = getMyDailyTaskQuery();
  console.log(myTaskSet?.taskSet, "mytasks");
  useEffect(() => {
    setTaskSet(myTaskSet?.taskSet);
    console.log(taskSet, "mytask");
  }, [taskSetLoading]);
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
              return (
                <div className="bg-white rounded-xl p-4 m-5 ">
                  <div className="text-3xl font-semibold">{task.title}</div>
                  <div>{task?.description}</div>
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
