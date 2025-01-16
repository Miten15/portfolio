"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaLocationArrow } from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { FunnyFallback } from "@/components/FunnyFallback";
import { SurpriseButton } from "@/components/SurpriseButton";
import { ComingSoonMeme } from "@/components/ComingSoonMeme";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import { navItems } from "@/data";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = projects.find((p) => p.id === projectId);

  const [showMeme, setShowMeme] = useState(false);
  const [memeError, setMemeError] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleEasterEgg = useCallback(() => {
    setShowMeme(true);
    setMemeError(true); // Always show error for better UX
    setTimeout(() => setShowMeme(false), 5000);
  }, []);

  const handleComingSoonEasterEgg = useCallback(() => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 7000);
  }, []);

  useEffect(() => {
    if (!project) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "c" || event.key === "C") {
        handleComingSoonEasterEgg();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [project, handleComingSoonEasterEgg]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
        <p className="text-2xl font-bold">No project found for the given ID.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white relative">
      <BackgroundBeams className="fixed inset-0" />
      <FloatingNav navItems={navItems} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-2xl">
            <Image
              src={project.img || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            {project.title}
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {project.des}
            </p>

            <div className="bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1"
                  >
                    <Image
                      src={icon || "/placeholder.svg"}
                      alt={`tech-${index}`}
                      width={24}
                      height={24}
                    />
                    <span className="text-sm">{`Tech ${index + 1}`}</span>
                  </div>
                ))}
              </div>
            </div>

            <SurpriseButton onClick={handleEasterEgg} />

            {/* Error Popups */}
            {(showMeme || showComingSoon) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              >
                {showMeme && <FunnyFallback />}
                {showComingSoon && <ComingSoonMeme />}
              </motion.div>
            )}

            <div className="mt-12">
              <Link
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl"
              >
                View Live Demo
                <FaLocationArrow className="ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
