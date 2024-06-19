import React from "react";
import { SparklesCore } from "./ui/sparkles";

const Spark = () => {
  return (
    <div className="w-screen h-screens">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
  );
};

export default Spark;
