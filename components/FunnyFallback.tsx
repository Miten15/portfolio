"use client";
import React from "react";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const funnyMessages = [
  "Our meme delivery pigeon got lost. We've sent a search party.",
  "The meme machine is out of order. Have you tried turning it off and on again?",
  "Error 404: Meme not found. It's probably stuck in a parallel universe.",
  "Oops! The meme escaped. It's probably partying somewhere in the cloud.",
  "Meme loading failed. Blame it on the alignment of the planets.",
];

export const FunnyFallback: React.FC = () => {
  const randomMessage =
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-[#1a1a1a] border border-red-500/20 rounded-lg shadow-2xl max-w-md w-full mx-4"
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <XCircle className="w-6 h-6 text-red-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              Meme Loading Error
            </h3>
            <p className="text-gray-400 mb-4">{randomMessage}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-md transition-colors"
            >
              Try Again
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
