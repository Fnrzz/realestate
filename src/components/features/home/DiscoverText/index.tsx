import ScrollAnimate from "../../animate/ScrollAnimate";

const DiscoverText = () => {
  return (
    <section className="flex flex-col gap-8 w-full h-full py-10 px-6 lg:p-15">
      <div className="flex flex-col md:flex-row  md:justify-between gap-5">
        <ScrollAnimate
          direction="right"
          className="w-full md:w-[50%] lg:w-[40%]"
        >
          <h2 className="text-3xl/10 lg:text-4xl/12 font-light tracking-wide text-center md:text-left">
            <span className="font-semibold">Discover Nature&apos;s</span>{" "}
            Wonders with Expert Guidance
          </h2>
        </ScrollAnimate>
        <div className="w-full md:w-[50%] lg:w-[20%] flex flex-col gap-3">
          <p className="text-md text-center md:text-left">
            12345,Gazipur, Bangladesh, Road, Dhaka
          </p>
          <p className="text-md text-center md:text-left">+880123456789</p>
        </div>
      </div>
    </section>
  );
};

export default DiscoverText;
