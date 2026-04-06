import Image from "next/image";
import React from "react";
import ScrollAnimate from "../../animate/ScrollAnimate";

const properties = [
  {
    image: "/assets/home1.avif",
    price: "$920,000",
    title: "Crystal Heights Residence",
    address: "114 Crystal Heights Drive, California",
    specs: ["3 Beds", "2 Bath", "240 sq. ft."],
  },
  {
    image: "/assets/home2.avif",
    price: "$920,000",
    title: "Crystal Heights Residence",
    address: "114 Crystal Heights Drive, California",
    specs: ["3 Beds", "2 Bath", "240 sq. ft."],
  },
  {
    image: "/assets/home3.avif",
    price: "$920,000",
    title: "Crystal Heights Residence",
    address: "114 Crystal Heights Drive, California",
    specs: ["3 Beds", "2 Bath", "240 sq. ft."],
  },
];

const ListHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {properties.map((property, index) => (
        <ScrollAnimate
          direction={index % 2 === 0 ? "up" : "down"}
          key={index}
          className="flex flex-col gap-4 group cursor-pointer"
        >
          <div className="relative w-full h-[250px] lg:h-[400px] rounded-4xl overflow-hidden">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover object-right lg:object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute w-full h-full flex p-4">
              <span className="w-fit h-fit px-4 py-2 bg-white font-medium rounded-full shadow-sm">
                {property.price}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold transition-colors">
              {property.title}
            </h3>
            <p className="text-gray-600">{property.address}</p>
            <div className="flex items-center flex-wrap gap-2 text-base text-gray-700 font-light mt-1">
              {property.specs.map((spec, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>{spec}</span>
                  {index < property.specs.length - 1 && (
                    <span className="text-gray-400 text-md">&bull;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimate>
      ))}
    </div>
  );
};

export default ListHome;
