import { Button } from "@/components/ui/button";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between p-4">
      <div className="text-2xl font-bold flex gap-10 justify-center items-center">
        <div>
          <span style={{ color: "blue" }}>Cheer</span>
          <span style={{ color: "black" }}>Up</span>
        </div>
        <div className="text-xl font-medium">
          <div className="flex gap-5">
            <div>Home</div>
            <div>Services</div>
            <div>Questions & Answers</div>
            <div>Consultation</div>
            <div>Articles</div>
          </div>
        </div>
      </div>
      <div className="flex gap-20 mr-10">
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
