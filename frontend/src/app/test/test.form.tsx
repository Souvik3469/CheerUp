"use client";
import { Button } from "@/components/ui/button";
import { QuestionsData } from "@/data/QuestionsData";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { fetchMyTests } from "@/api/test";

function TestForm() {
  const question = fetchMyTests();

  const [currentInd, setCurrentInd] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const handleOptionChange = (
    questionIndex: any,
    optionIndex: any,
    points: any
  ) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: { optionIndex, points },
    });
  };

  const calculateTotalPoints = () => {
    return Object.values(selectedOptions).reduce(
      (total, option: any) => total + (option.points || 0),
      0
    );
  };

  const resetForm = () => {
    setCurrentInd(0);
    setSelectedOptions({});
  };

  console.log(calculateTotalPoints(), "selected");

  return (
    <div className="p-10">
      {question.data &&
        question.data[1]?.questions.map((data: any, ind: any) =>
          ind === currentInd ? (
            <div key={ind}>
              <p className="text-2xl">
                {"Q"}
                {ind + 1 + "."}
                {data.text}
              </p>
              <div className="flex flex-col gap-5 mt-5">
                {data.options.map((op: any, optionInd: any) => (
                  <div
                    key={optionInd}
                    className="flex border border-gray-200 w-[30%] p-4"
                  >
                    <input
                      type="radio"
                      name={`question-${ind}`}
                      checked={selectedOptions[ind]?.optionIndex === optionInd}
                      onChange={() =>
                        handleOptionChange(ind, optionInd, op.score)
                      }
                      className="mr-2"
                    />
                    {op.text}
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      <div className="flex justify-between gap-5 mt-10">
        <div className="flex gap-5">
          <Button
            onClick={() => currentInd > 0 && setCurrentInd(currentInd - 1)}
          >
            Back
          </Button>
          <Button
            onClick={() =>
              currentInd < question.data[1]?.questions.length - 1 &&
              setCurrentInd(currentInd + 1)
            }
          >
            Next
          </Button>
        </div>
        <div className="flex gap-5">
          <Button className="bg-red-500 hover:bg-red-600" onClick={resetForm}>
            Reset
          </Button>
          <>
            <Button
              className="bg-blue-700 hover:bg-blue-900"
              onClick={() => {
                setOpenDialog(true);
              }}
              disabled={
                Object.keys(selectedOptions).length !==
                question.data[1]?.questions.length
              }
            >
              Submit
            </Button>
          </>
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Total Points</DialogTitle>
            <DialogDescription>This action cannot be undone.</DialogDescription>
            You got {calculateTotalPoints()}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TestForm;
