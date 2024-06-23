import React from "react";

function SectionTrust() {
  return (
    <div className="mt-20 max-w-7xl mx-auto mb-20">
      <div className="text-4xl text-center font-semibold">
        Why Should you trust us?
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10 mb-10">
        <TrustCard />
        <TrustCard />
        <TrustCard />
        <TrustCard />
        <TrustCard />
        <TrustCard />
        <TrustCard />
        <TrustCard />
      </div>
    </div>
  );
}

export default SectionTrust;

const TrustCard = () => {
  return (
    <div className="bg-slate-100 p-5">
      <div className="font-bold text-xl">All Specialist</div>
      <div>
        You can reach upto 3500+ doctors who are experienced at mental health{" "}
      </div>
    </div>
  );
};
