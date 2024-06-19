import React from "react";
import { Meteors } from "./ui/Meteors";

export function MeteorsBg() {
  return (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl">
      {/* Meaty part - Meteor effect */}
      <Meteors number={50} />
    </div>
  );
}
