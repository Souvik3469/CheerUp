import React from "react";
// import ConsultantCard from "../../_components/ConsultantCard";
import Event from "./components/Event";

function page() {
  return (
    <>
      <div className="primary-container mt-4 bg-blue-200">
        <div className="text-center font-serif text-4xl">All Ngo Events</div>
        <hr className="my-5" />
        <div className="grid grid-cols-2 p-4 gap-10">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </>
  );
}

export default page;
