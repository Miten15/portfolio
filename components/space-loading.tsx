"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SpaceLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 1, 100));
      }
    }, 20);
    return () => clearTimeout(timer);
  }, [progress]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020817]">
      {" "}
      {/* Animated stars background - full screen */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      {/* Main content container */}
      <div className="relative w-full max-w-md px-4 z-10">
        {" "}
        {/* Rocket ship */}
        <motion.div
          className="relative w-24 h-24 mx-auto mb-8"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            {/* Rocket flame effect */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-16"
              style={{
                background: "linear-gradient(to bottom, #ff3d00, transparent)",
                filter: "blur(8px)",
                zIndex: 1,
              }}
              animate={{
                height: ["60px", "100px", "60px"],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Rocket body */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full transform -rotate-45 z-10" />
            {/* Rocket window */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full z-20" />
          </div>
        </motion.div>
        {/* Progress bar */}
        <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"
            style={{ width: `${progress}%` }}
            animate={{
              background: [
                "linear-gradient(to right, #9333ea, #3b82f6, #9333ea)",
                "linear-gradient(to right, #3b82f6, #9333ea, #3b82f6)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        {/* Loading text */}
        <div className="mt-4 text-center">
          <motion.p
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Initiating Launch Sequence...
          </motion.p>
          <p className="text-sm text-gray-400 mt-2">
            {progress}% - Preparing for takeoff
          </p>
        </div>
      </div>
    </div>
  );
}
