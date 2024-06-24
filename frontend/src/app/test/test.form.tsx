"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fetchMyTests } from "@/api/test";

function TestForm() {
  const {
    data: myTests,
    isLoading: myTestsLoading,
    isError: myTestsError,
  } = fetchMyTests();
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const handleOptionChange = (questionIndex, optionIndex, points) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: { optionIndex, points },
    });
  };

  const calculateTotalPoints = () => {
    return Object.values(selectedOptions).reduce(
      (total, option) => total + (option.points || 0),
      0
    );
  };

  const resetForm = () => {
    setCurrentTestIndex(0);
    setSelectedOptions({});
  };

  const handleSubmit = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (myTestsLoading) {
    return <div>Loading...</div>;
  }

  if (myTestsError) {
    console.log("Error fetching tests:", myTestsError);
    return <div>Error fetching tests. Please try again later.</div>;
  }

  if (!myTests || myTests.length === 0) {
    return <div>No test data found.</div>;
  }
  const questionSet = myTests[1].questions;
  console.log("====================================");
  console.log("QQQQ", questionSet);
  console.log("====================================");

  const currentTest = questionSet[currentTestIndex];

  return (
    <div className="p-10">
      <p className="text-2xl">
        {"Q"}
        {currentTestIndex + 1 + "."}
        {currentTest.text}
      </p>
      <div className="flex flex-col gap-5 mt-5">
        {currentTest.map((question, questionIndex) => (
          <div
            key={question.id}
            className="flex border border-gray-200 w-[30%] p-4"
          >
            <input
              type="radio"
              name={`question-${currentTestIndex}`}
              checked={
                selectedOptions[currentTestIndex]?.optionIndex === questionIndex
              }
              onChange={() =>
                handleOptionChange(
                  currentTestIndex,
                  questionIndex,
                  question.options[questionIndex].score
                )
              }
              className="mr-2"
            />
            {question.text}
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-5 mt-10">
        <div className="flex gap-5">
          <Button
            onClick={() =>
              currentTestIndex > 0 && setCurrentTestIndex(currentTestIndex - 1)
            }
          >
            Back
          </Button>
          <Button
            onClick={() =>
              currentTestIndex < myTests.length - 1 &&
              setCurrentTestIndex(currentTestIndex + 1)
            }
          >
            Next
          </Button>
        </div>
        <div className="flex gap-5">
          <Button className="bg-red-500 hover:bg-red-600" onClick={resetForm}>
            Reset
          </Button>
          <Button
            className="bg-blue-700 hover:bg-blue-900"
            onClick={handleSubmit}
            disabled={
              Object.keys(selectedOptions).length !==
              currentTest.questions.length
            }
          >
            Submit
          </Button>
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={handleCloseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Total Points</DialogTitle>
            You got {calculateTotalPoints()}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TestForm;
