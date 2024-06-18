import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { gridItems } from "@/data";

export function Grid() {
  return (
    <BentoGrid className="max-w-screen mx-auto">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const Laptop = () => (
  <div className="flex flex-1 w-screen h-full  rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-100  text-neutral-500 w-screen" />,
  },
];
