import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const SurpriseButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-20 right-4 z-50 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 transition-colors"
    >
      <Sparkles className="w-4 h-4" />
      <span className="text-sm font-medium">Surprise!</span>
    </motion.button>
  );
};
