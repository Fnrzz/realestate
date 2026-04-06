import { Button } from "@/components/ui/button";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import VideoModal from "./VideoModal";
import ShowcaseImage from "./ShowcaseImage";
import ScrollAnimate from "../../animate/ScrollAnimate";

const Showcase = () => {
  return (
    <section className="flex flex-col gap-8 w-full h-full py-10 px-6 lg:p-15">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <ScrollAnimate
          direction="right"
          className="w-full md:w-[50%] lg:w-[40%]"
        >
          <h2 className="text-3xl/10 lg:text-4xl/12 font-light tracking-wide text-center md:text-left">
            <span className="font-semibold">Your primary home</span> might begin
            to feel left out.
          </h2>
        </ScrollAnimate>
        <ScrollAnimate
          direction="left"
          className="w-full md:w-[40%] flex flex-col sm:flex-row items-center justify-end gap-4"
        >
          <VideoModal />
          <p className="text-base md:text-sm lg:text-lg font-light w-full text-center sm:text-left">
            Each listing offers exceptional quality, unique features, and prime
            locations
          </p>
        </ScrollAnimate>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:h-[500px]">
        <ShowcaseImage />
        <div className="w-full lg:w-[55%] lg:h-full flex flex-col gap-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:h-full flex-grow">
            <ScrollAnimate
              direction="up"
              className="w-full h-full bg-gray-100 rounded-4xl flex flex-col items-center justify-center gap-4 py-8 px-4 lg:p-4 text-center"
            >
              <h3 className="text-2xl md:text-3xl w-[90%] font-medium">
                Big things can happen in small spaces.
              </h3>
              <p className="text-sm md:text-md text-gray-500 w-[90%]">
                With thoughtful design and smart organization, you can maximize
                every inch, making room for creativity
              </p>
              <Button
                variant={"outline"}
                size={"lg"}
                className="bg-transparent border-black mt-2"
              >
                Details
              </Button>
            </ScrollAnimate>

            <ScrollAnimate
              direction="down"
              className="w-full h-full bg-gray-100 rounded-4xl flex flex-col justify-between gap-4 p-2 pb-5"
            >
              <div className="relative w-full h-[200px] md:h-[180px] lg:h-[250px]  min-h-[150px] rounded-3xl overflow-hidden shrink-0">
                <Image
                  src={"/assets/home1.avif"}
                  fill
                  alt="home"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-lg md:text-xl text-center text-gray-500">
                  Pricing Start at{" "}
                  <span className="text-black font-semibold">$256K</span>
                </h3>
                <Button size={"lg"} className="w-[90%] lg:w-auto">
                  Explore Properties <MoveRightIcon className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </ScrollAnimate>
          </div>

          <ScrollAnimate
            direction="fade"
            className="flex flex-col md:flex-row items-center justify-between gap-5 mt-auto pt-2"
          >
            <p className="text-base md:text-md font-light w-full md:w-[60%] text-center md:text-left">
              Whether it&apos;s creating a cozy corner for relaxation or
              transforming a small area into a workspace
            </p>
            <div className="w-full md:w-[40%] flex items-center justify-center md:justify-end gap-3">
              <Button
                variant={"outline"}
                size={"icon"}
                className="w-12 h-12 rounded-full border-gray-300"
                aria-label="left-arrow"
              >
                <MoveLeftIcon className="w-5 h-5 text-gray-600" />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="w-12 h-12 rounded-full border-gray-300"
                aria-label="right-arrow"
              >
                <MoveRightIcon className="w-5 h-5 text-gray-600" />
              </Button>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
