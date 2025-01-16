"use client";
import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

const Approach: React.FC = () => {
  const cardContent = [
    {
      id: 1,
      title: "Planning",
      description: "A comprehensive plan and strategy for your project.",
      phase: "Phase 1",
    },
    {
      id: 2,
      title: "Update",
      description:
        "Regular updates on development progress to keep you informed.",
      phase: "Phase 2",
    },
    {
      id: 3,
      title: "Launch",
      description:
        "Final development phase and launching your project successfully.",
      phase: "Phase 3",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center" id="approach">
      <div className="py-20 w-full text-center">
        <h1 className="heading">
          My <span className="text-purple">Approach</span>
        </h1>
      </div>
      {cardContent.map((card) => (
        <div
          key={card.id}
          className="border border-black/[0.2] dark:border-white/[0.2] max-w-sm mx-4 mb-8 p-4 relative h-[30rem]"
        >
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard
            text={card.title}
            description={card.description}
            phase={card.phase}
            className={undefined}
          />
        </div>
      ))}
    </div>
  );
};

export default Approach;
