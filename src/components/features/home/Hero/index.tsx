import Image from "next/image";
import Search from "./Search";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/assets/hero.avif"
        alt="hero"
        loading="eager"
        fill
        className="object-cover object-center brightness-[0.6]"
      />
      <div className="absolute px-6 py-20 lg:p-15 z-2 w-full h-full flex items-end">
        <div className="w-full flex flex-col gap-4">
          <h1
            data-aos="fade-right"
            className="text-3xl md:text-6xl text-center md:text-left text-white text-shadow"
          >
            Find your <span className="text-primary">dream home</span>
          </h1>
          <h1
            data-aos="fade-right"
            className="text-2xl md:text-5xl text-center md:text-left text-white"
          >
            with ease and confidence
          </h1>
          <p
            data-aos="fade-down"
            className="text-sm md:text-md text-center md:text-left text-white"
          >
            Explore the best properties in Indonesia and take the next steps
            towards your future today
          </p>
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <Search />
            <ScrollDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
