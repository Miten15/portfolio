"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export const ComingSoonMeme: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-[#1a1a1a] border border-yellow-500/20 rounded-lg shadow-2xl max-w-md w-full mx-4"
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Clock className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              Project Under Construction
            </h3>
            <p className="text-gray-400 mb-4">
              Our dev ninjas are working tirelessly behind the scenes. Check
              back soon for mind-blowing updates!
            </p>
            <div className="bg-yellow-500/10 rounded-md p-4 text-yellow-500 text-sm">
              Pro tip: While you wait, try pressing random keys. You might
              discover some hidden surprises! 🎮
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
