import React from "react";
import { FlipWords } from "./ui/flip-words";
import { projects } from "@/data";
import { BackgroundBeams } from "./ui/background-beams";

const words = ["recent", "amazing", "great"];

const RecentProjects = () => {
  return (
    <div className="relative py-20">
      <BackgroundBeams className="py-10 mt-15 absolute inset-0 z-0" />
      <div className="relative z-10">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">
            <FlipWords words={words} /> projects
          </span>
        </h1>
        <div className="overflow-auto">
          <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
              <div
                key={id}
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              >
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
