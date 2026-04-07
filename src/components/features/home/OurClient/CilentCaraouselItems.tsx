"use client";

import { CarouselItemProps } from "@/@types/ClientCaraouselTypes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon, StarIcon } from "lucide-react";
import { motion } from "motion/react";

const CilentCaraouselItems = ({ data }: CarouselItemProps) => {
  return (
    <motion.div
      key={data.name}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-white w-[95%] sm:w-[70%] lg:w-[45%] xl:w-[30%] flex flex-col gap-4 md:gap-6 p-6 md:p-8 rounded-4xl shadow-2xl"
    >
      <div className="flex justify-between items-center">
        <QuoteIcon
          fill="currentColor"
          className="w-6 h-6 md:w-8 md:h-8 text-primary rotate-180"
        />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              fill="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 text-orange-500"
            />
          ))}
        </div>
      </div>

      <p className="text-sm md:text-base text-gray-700 italic leading-relaxed min-h-[100px] md:min-h-[120px]">
        &quot;{data.quote}&quot;
      </p>

      <div className="flex items-center gap-4 mt-2">
        <Avatar className="w-14 h-14 md:w-16 md:h-16">
          <AvatarImage
            src={data.avatar}
            alt={data.name}
            className="object-cover"
          />
          <AvatarFallback>{data.fallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-base md:text-lg font-semibold text-gray-900">
            {data.name}
          </span>
          <span className="text-xs md:text-sm text-gray-500">{data.role}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CilentCaraouselItems;
