"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import Grid from "../components/Grid";
import Mask from "@/components/Mask";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import WorkExp from "@/components/WorkExp";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import SpaceLoading from "@/components/space-loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SpaceLoading />
      ) : (
        <main className="relative bg-black-100 min-h-screen overflow-x-hidden">
          <div className="mx-auto max-w-[2000px] px-4 sm:px-10">
            <TracingBeam>
              <div className="relative w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <Mask />
                <RecentProjects />
                <WorkExp />
                <Approach />
                <Footer />
              </div>
            </TracingBeam>
          </div>
        </main>
      )}
    </>
  );
}
