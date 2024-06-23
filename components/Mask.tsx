"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

const Mask = () => {
  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center text-4xl font-bold my-10">
            Hi, I&apos;m a very creative dev &amp; My favorite framework is{" "}
            <span className="text-purple">Next.js.</span>
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        <p className="text-2xl text-gray-700">
          Hi, I&apos;m a very creative dev &amp; My favorite framework is{" "}
          <span className="text-purple">Next.js.</span>
        </p>
      </MaskContainer>
    </div>
  );
};

export default Mask;
