"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollAnimate from "../../animate/ScrollAnimate";

const images = [
  "/assets/home/photo/home1.avif",
  "/assets/home/photo/home1-1.avif",
  "/assets/home/photo/home1-2.avif",
];

const ShowcaseImage = () => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <ScrollAnimate
      direction="up"
      className="relative w-full lg:w-[45%] h-[300px] md:h-[400px] lg:h-full rounded-4xl overflow-hidden shrink-0"
    >
      <Image
        key={activeImage}
        src={activeImage}
        alt="Main Showcase"
        loading="eager"
        fill
        className="object-cover object-center transition-all duration-300 "
      />

      <div className="absolute top-0 left-0 w-full h-full p-4 flex items-end pointer-events-none">
        <div className="p-2 bg-white rounded-full flex gap-2 shadow-md pointer-events-auto relative z-10">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(src)}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden transition-all duration-300 ${
                activeImage === src
                  ? "ring-2 ring-primary scale-110 shadow-md"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <Image
                src={src}
                alt={`thumbnail-${index}`}
                width={100}
                height={100}
                loading="eager"
                className="w-full h-full object-cover pointer-events-none"
              />
            </button>
          ))}
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default ShowcaseImage;
