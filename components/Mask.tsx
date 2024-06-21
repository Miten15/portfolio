"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

const Mask = () => {
  return (
    <div className="h-full w-full  items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold my-10 ">
            Hi, I'm a very lazy dev. My favorite framework is Copy-Paste.js.
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        Hi, I'm a very <span className="text-purple">creative</span>
        {""} dev. My favorite framework is {""}
        <span className="text-purple">Next.js.</span>
      </MaskContainer>
    </div>
  );
};

export default Mask;
