"use client";

import CountUp from "@/components/features/animate/CountUp";
import ScrollAnimate from "../../animate/ScrollAnimate";

const statsData = [
  {
    value: 1500,
    label: "Successful Projects",
  },
  {
    value: 3000,
    label: "Satisfied Clients",
  },
  {
    value: 2000,
    label: "Properties Managed",
  },
  {
    value: 200,
    label: "Investment Strategies",
  },
];

const CountOverview = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {statsData.map((stat, index) => (
        <ScrollAnimate
          direction={index % 2 === 0 ? "right" : "left"}
          key={index}
          className="flex flex-col gap-4"
        >
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
        </ScrollAnimate>
      ))}
    </div>
  );
};

export default CountOverview;
