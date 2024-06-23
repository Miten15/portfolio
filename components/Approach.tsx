"use client";
import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function Approach() {
  const cardContent = [
    {
      id: 1,
      title: "Planning",
      des: "A comprehensive plan and strategy for your project.",
    },
    {
      id: 2,
      title: "Update",
      des: "Regular updates on development progress to keep you informed.",
    },
    {
      id: 3,
      title: "Launch",
      des: "Final development phase and launching your project successfully.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mb-20" id="approach">
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

          <EvervaultCard text={card.title} />

          <h2 className="card-description dark:text-white text-black mt-4 text-sm font-light">
            {card.des}
          </h2>
        </div>
      ))}
    </div>
  );
}
