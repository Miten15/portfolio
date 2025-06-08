"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
import { projects } from "@/data";
import { BackgroundBeams } from "./ui/background-beams";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const words = ["recent", "amazing", "great"];

const RecentProjects = () => {
  return (
    <div className="relative py-20" id="projects">
      <BackgroundBeams className="py-10 mt-15 absolute inset-0 z-0" />
      <div className="relative z-10">
        <h1 className="heading text-white">
          A small selection of{" "}
          <span className="text-purple">
            <FlipWords words={words} /> projects
          </span>
        </h1>
        <div className="overflow-auto">
          <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
              <Link
                href={link}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                  <PinContainer title={title} href={link}>
                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                      <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        <Image
                          src="/bg.png"
                          alt="background image"
                          fill={true} // Replace layout="fill"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes
                          className="object-cover" // Replace objectFit="cover"
                        />
                      </div>
                      <Image
                        src={img}
                        alt={title}
                        width={500}
                        height={300}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes
                        className="z-10 absolute bottom-0 w-[90%] h-[90%] object-contain p-2"
                      />
                    </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {title}
                    </h1>

                    <p
                      className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                      style={{ color: "#BEC1DD", margin: "1vh 0" }}
                    >
                      {des}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                        {iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`,
                            }}
                          >
                            <Image
                              src={icon}
                              alt={`icon-${index}`}
                              width={42}
                              height={42}
                              // sizes prop might not be strictly necessary here due to fixed small size
                              // but can be added if responsive scaling is intended
                              className="p-2"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                          Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    </div>
                  </PinContainer>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
