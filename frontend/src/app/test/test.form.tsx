"use client";
import { Button } from "@/components/ui/button";
import { QuestionsData } from "@/data/QuestionsData";
import React, { useState } from "react";

function TestForm() {
  const [currentInd, setCurrentInd] = useState(0);
  return (
    <div className="p-10">
      {QuestionsData?.map((data, ind) =>
        ind === currentInd ? (
          <div key={ind}>
            {"Q"}
            {ind + 1 + "."} {data.question}
            <>
              {data.options.map((op) => {
                return <div className="flex">{op.text} </div>;
              })}
            </>
          </div>
        ) : null
      )}
      <div className="flex gap-5 mt-10">
        <Button onClick={() => currentInd > 0 && setCurrentInd(currentInd - 1)}>
          {" "}
          Back{" "}
        </Button>
        <Button
          onClick={() =>
            currentInd < QuestionsData.length - 1 &&
            setCurrentInd(currentInd + 1)
          }
        >
          {" "}
          Next{" "}
        </Button>
      </div>
    </div>
  );
}

export default TestForm;
// grpc -> rpc get_outsource get repair task
