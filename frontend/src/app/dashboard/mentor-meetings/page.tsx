"use client";
import { MentorMeetings, confirmMeeting, rejectMeeting } from "@/api/meeting";
import React from "react";
import { Button } from "@/components/ui/button";
function page() {
  const info = MentorMeetings();
  const confirm = async (id) => {
    const data = await confirmMeeting({
      meetingId: id,
    });
    info.refetch();
  };
  const reject = async (id) => {
    const data = await rejectMeeting({
      meetingId: id,
    });
    info.refetch();
  };
  console.log(info, "info");
  return (
    <div className="mt-10 mx-auto m">
      <div className="text-center font-comf font-semibold text-4xl mb-10">
        Alloted Meetings
      </div>
      <div className="mx-auto max-w-7xl">
        {info.data?.map((d) => {
          return (
            <div className="mx-auto ml-48">
              <div className="bg-slate-100 p-4 flex justify-between  rounded-xl w-3/4 ">
                <div>
                  <div>
                    <span className="font-semibold">Name:</span>
                    {d.host?.name}
                  </div>
                  <div>
                    {" "}
                    <span className="font-semibold">Note:</span>
                    {d.notes}
                  </div>
                </div>
                <div className="flex gap-4">
                  {d.status !== "confirmed" ? (
                    <Button
                      className="bg-green-400 p-2 text-white rounded-2xl"
                      onClick={() => {
                        confirm(d.id);
                      }}
                    >
                      Confirm Meeting
                    </Button>
                  ) : (
                    <Button className="bg-green-400 p-2 text-white rounded-2xl">
                      {d.status}
                    </Button>
                  )}
                  {d.status === "requested" ? (
                    <Button
                      className="bg-red-400 p-2 text-white rounded-2xl"
                      onClick={() => {
                        reject(d.id);
                      }}
                    >
                      Reject Meeting
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
