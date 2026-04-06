import ScrollAnimate from "../../animate/ScrollAnimate";
import ListCategory from "./ListCategory";
import ListHome from "./ListHome";

const ExploreApartements = () => {
  return (
    <section className="flex flex-col gap-10 w-full h-full py-10 px-6 lg:p-15">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
        <ScrollAnimate
          direction="right"
          className="w-full md:w-[50%] lg:w-[40%]"
        >
          <h2 className="text-3xl/10 lg:text-4xl/12 font-light tracking-wide text-center md:text-left">
            <span className="font-semibold">Explore Apartements</span> and Homes
            for Sale
          </h2>
        </ScrollAnimate>
        <ScrollAnimate
          direction="left"
          className="w-full md:w-[40%] flex flex-col sm:flex-row items-center justify-end gap-4"
        >
          <p className="text-base md:text-md  font-light w-full text-center sm:text-left">
            Each listing offers exceptional quality, unique features, and prime
            locations
          </p>
        </ScrollAnimate>
      </div>
      <ListCategory />
      <ListHome />
    </section>
  );
};

export default ExploreApartements;
