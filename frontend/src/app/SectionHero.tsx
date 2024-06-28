// SectionHero.tsx
"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";

function SectionHero() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 p-10 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
        <div className="text-5xl font-semibold flex flex-col w-[80%] justify-center">
          Your One-Stop Solution for Mental Well-being
          <div className="text-2xl mt-10">
            <Typewriter
              words={[
                "Take the First Step to Wellness",
                "Consult Top Mental Health Experts",
                "Personalized 30-Day Mental Exercise Plan",
                "Join Supportive Communities",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <Button className="text-xl w-[200px] mt-4">Take a Test</Button>
        </div>
        <div className="mx-auto my-auto">
          <Image
            className="rounded-3xl"
            alt="Mental wellness"
            height={500}
            width={700}
            src="https://www.collegetransitions.com/wp-content/uploads/2023/06/blog-HowLongDoesTakeDoctor-1460x822-1.webp"
          />
        </div>
      </div>
    </>
  );
}

export default SectionHero;
