"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlayIcon } from "lucide-react";
import Image from "next/image";

const VideoModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative z-10 touch-manipulation w-full sm:w-[120px] md:w-[80px] h-[200px] md:h-[50px] relative overflow-hidden rounded-4xl lg:rounded-full shrink-0 group">
          <Image
            src="/assets/home/photo/home1.avif"
            alt="home1"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 120px"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <CirclePlayIcon className="text-white w-[40px] h-[40px] md:w-[30px] md:h-[30px]" />
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-black border-none focus:outline-none">
        <DialogTitle className="sr-only">Property Showcase Video</DialogTitle>
        <DialogDescription className="sr-only">
          Watch our property showcase video
        </DialogDescription>
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          <video
            className="w-full h-full object-contain focus:outline-none"
            controls
            playsInline
          >
            <source src="/assets/home/video/home1.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
