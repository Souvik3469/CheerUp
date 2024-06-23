"use client";

import SectionConsult from "./SectionConsult";
import SectionHero from "./SectionHero";
import SectionProcess from "./SectionProcess";
import SectionTrust from "./SectionTrust";

export default function Home() {
  return (
    <div>
      <SectionHero />
      <SectionTrust />
      <SectionProcess />
      <SectionConsult />
    </div>
  );
}
