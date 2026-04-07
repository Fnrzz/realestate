"use client";

import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const DiscoverParalax = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col gap-8 w-full h-[400px] md:h-[500px] overflow-hidden"
    >
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
      >
        <Image
          src="/assets/home/photo/home1.avif"
          alt="home1"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center brightness-[0.5]"
        />
      </motion.div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4 px-6">
        <h1 className="text-3xl md:text-5xl w-full lg:w-[50%] text-center text-white font-semibold leading-tight">
          Discover the World, One Adventure at a Time
        </h1>
        <p className="text-sm md:text-base w-full lg:w-[60%] text-center text-gray-200">
          Travel Beyond Limits, Explore Without Boundaries. See the World, Live
          the Journey.
        </p>
        <Button
          size={"lg"}
          variant={"outline"}
          className="bg-white text-black hover:bg-gray-100 border-none mt-4 transition-transform hover:scale-105"
        >
          Get Started <MoveRightIcon className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default DiscoverParalax;
