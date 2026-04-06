"use client";

import CountUp from "@/components/features/animate/CountUp";

const statsData = [
  {
    value: 1500,
    label: "Successful Projects",
    aos: "fade-right",
  },
  {
    value: 3000,
    label: "Satisfied Clients",
    aos: "fade-left",
  },
  {
    value: 2000,
    label: "Properties Managed",
    aos: "fade-right",
  },
  {
    value: 200,
    label: "Investment Strategies",
    aos: "fade-left",
  },
];

const CountOverview = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {statsData.map((stat, index) => (
        <div key={index} className="flex flex-col gap-4" data-aos={stat.aos}>
          <h2 className="text-3xl lg:text-5xl font-semibold">
            <CountUp
              from={0}
              to={stat.value}
              separator=","
              direction="up"
              duration={0.2}
              className="count-up-text"
            />
            +
          </h2>
          <p className="text-md lg:text-xl font-light">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CountOverview;
