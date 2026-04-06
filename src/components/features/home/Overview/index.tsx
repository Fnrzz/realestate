import ScrollAnimate from "../../animate/ScrollAnimate";
import CountOverview from "./CountOverview";

const Overview = () => {
  return (
    <section className="flex flex-col gap-10 lg:gap-20 w-full h-full px-6 py-10 lg:p-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ScrollAnimate
          direction="right"
          className="w-full h-full flex flex-col gap-4"
        >
          <h3 className="lg:w-[70%] text-xl md:text-2xl  font-semibold">
            Transforming Properties with Tailored Investment Expertise
          </h3>
          <p className="lg:w-[80%] text-md font-light">
            By leveraging davance data andytics and perzonalized investment
            approach, we deliver results that exceed expectations, helping
            clients unlock the full potential.
          </p>
        </ScrollAnimate>
        <ScrollAnimate direction="left" className="w-full h-full">
          <h2 className="text-3xl/10 lg:text-4xl/12 font-light tracking-wide">
            <span className="font-semibold">Maximizing Property</span> Growth
            Through Cuttting-Edge Investmen Strategies
          </h2>
        </ScrollAnimate>
      </div>
      <CountOverview />
    </section>
  );
};

export default Overview;
