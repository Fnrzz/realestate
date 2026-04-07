"use client";
import Image from "next/image";
import CilentCaraouselItems from "./CilentCaraouselItems";
import { useEffect, useState } from "react";

const carouselData = [
  {
    id: 1,
    bgImage: "/assets/home/photo/home1.avif",
    quote:
      "I had an amazing experience with this company. Their team is friendly, professional, and extremely knowledgeable about this market.",
    name: "Alexandra",
    role: "Real Estate Agent",
    avatar: "/assets/avatar/alex.avif",
    fallback: "AL",
  },
  {
    id: 2,
    bgImage: "/assets/home/photo/home2.avif",
    quote:
      "The level of service provided was absolutely phenomenal. They took the time to understand exactly what I was looking for and delivered beyond my expectations.",
    name: "Diego",
    role: "Home Buyer",
    avatar: "/assets/avatar/diego.avif",
    fallback: "DI",
  },
  {
    id: 3,
    bgImage: "/assets/home/photo/home3.avif",
    quote:
      "Selling a property can be stressful, but this team made it incredibly smooth. Their marketing strategies are top-notch and highly effective.",
    name: "Mariola",
    role: "Property Investor",
    avatar: "/assets/avatar/mariola.avif",
    fallback: "MA",
  },
];

const ClientCaraousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[500px] md:h-[600px] relative rounded-4xl overflow-hidden shadow-sm">
      {carouselData.map((item, index) => (
        <Image
          key={item.id}
          src={item.bgImage}
          alt={`background-${index}`}
          fill
          loading={index === 0 ? "eager" : "lazy"}
          sizes="100vw"
          className={`object-cover object-center brightness-80 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 p-4">
        <CilentCaraouselItems data={carouselData[currentIndex]} />
        <div className="flex gap-2 items-center">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-500 ease-in-out cursor-pointer ${
                index === currentIndex
                  ? "w-10 bg-white"
                  : "w-3 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCaraousel;
