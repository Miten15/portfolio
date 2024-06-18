import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#e54dd3"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#44008d"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-30 left-20"
          fill="#44008d"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#00076f"
        />
        <Spotlight className="h-[60vh] w-[30vw] left-full" fill="indigo-500" />
        <Spotlight className="h-[60vh] w-[100vw] left-full" fill="indigo-500" />
        {/* Additional Spotlights for a more cosmic feel */}
        <Spotlight
          className="h-[70vh] w-[40vw] top-60 right-10"
          fill="#1a2a6c"
        />
        <Spotlight
          className="h-[50vh] w-[30vw] bottom-20 left-1/4"
          fill="#2e3a8c"
        />
        <Spotlight
          className="h-[50vh] w-[20vw] bottom-10 right-1/3"
          fill="#0f4c75"
        />
      </div>

      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            A UI/UX & Full-Stack Dev
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Miten, a Next.js Developer based in India.
          </p>

          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/4" />
          </div>
          <div className="pt-100">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position={"right"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
