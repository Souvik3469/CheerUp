import { Button } from "@/components/ui/button";
import React from "react";
import { GetUserQuery } from "../api/user/index";
import Link from "next/link";
function Navbar() {
  const user = GetUserQuery();

  return (
    <div className="flex justify-between p-4">
      <div className="text-2xl font-bold flex gap-10 justify-center items-center">
        <Link href="/">
          <span style={{ color: "blue" }}>Cheer</span>
          <span style={{ color: "black" }}>Up</span>
        </Link>
        <div className="text-xl font-medium">
          <div className="flex gap-5">
            <div>Home</div>
            <Link href="/dashboard">Dashboard</Link>
            <div>Discussion Forum</div>
            <div>Consultation</div>
            <Link href="/test">Test</Link>
            <div>Articles</div>
          </div>
        </div>
      </div>
      <div className="flex gap-20 mr-10">
        {user?.data ? (
          <div className="flex items-center gap-10">
            {" Hello, " + user?.data?.name}
            <Link href="/login">
              <Button
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                Logout
              </Button>
            </Link>
          </div>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
