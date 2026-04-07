import Image from "next/image";
import { ClockIcon, MoveUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimate from "../../animate/ScrollAnimate";

const newsData = [
  {
    id: 1,
    image: "/assets/home/photo/home1.avif",
    location: "CANADA",
    date: "Dec 22, 2026",
    title: "Sustainable Destinations and Practices",
  },
  {
    id: 2,
    image: "/assets/home/photo/home2.avif",
    location: "CANADA",
    date: "Dec 22, 2026",
    title: "Sustainable Destinations and Practices",
  },
  {
    id: 3,
    image: "/assets/home/photo/home3.avif",
    location: "CANADA",
    date: "Dec 22, 2026",
    title: "Sustainable Destinations and Practices",
  },
];

const ListNews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {newsData.map((news) => (
        <ScrollAnimate
          direction={news.id % 2 === 0 ? "up" : "down"}
          key={news.id}
          className="flex flex-col gap-4"
        >
          <div className="relative w-full h-[250px] lg:h-[400px] rounded-4xl overflow-hidden">
            <Image
              src={news.image}
              alt={news.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2 text-xs lg:text-sm text-gray-500 uppercase tracking-wider font-medium">
              {news.location} | <ClockIcon className="w-4 h-4 md:w-5 md:h-5" />{" "}
              {news.date}
            </span>

            <h3 className="text-2xl font-medium">{news.title}</h3>

            <Button
              size={"lg"}
              variant={"outline"}
              className="w-fit gap-2 mt-2"
            >
              Read More <MoveUpRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </ScrollAnimate>
      ))}
    </div>
  );
};

export default ListNews;
