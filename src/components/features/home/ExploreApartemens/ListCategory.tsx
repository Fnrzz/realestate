import Link from "next/link";

const categories = [
  "See More Blogs",
  "Apartments",
  "Luxury",
  "Villas",
  "Commercial",
  "Newly-built",
  "Rentals",
  "Residential",
  "Land & Plots",
  "Flats",
];

const ListCategory = () => {
  return (
    <div data-aos="fade-up" className="w-full">
      <div className="flex items-center w-full gap-2 py-2 overflow-x-scroll scrollbar-hide scroll-smooth touch-pan-x ">
        {categories.map((category, index) => (
          <Link
            key={index}
            href="/"
            className={`px-4 py-2 text-sm rounded-full whitespace-nowrap shrink-0 transition-colors ${
              index === 0
                ? "bg-black text-white"
                : "border-2 border-gray-200 text-gray-500 hover:border-gray-400 hover:text-black"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListCategory;
