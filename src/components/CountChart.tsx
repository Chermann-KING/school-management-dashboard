"use client";

import Image from "next/image";
import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 95,
    fill: "#ffffff",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#C3EBFA",
  },
];
const CountChart = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Students</h2>
        <Image
          src={"/images/moreDark.png"}
          alt="more icon"
          width={20}
          height={20}
        />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/images/maleFemale.png"}
          alt="male-female icon"
          width={50}
          height={50}
          aria-hidden={true}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
          <h3 className="font-bold">1,234</h3>
          <p className="text-xs text-gray-300">Boys (55%)</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
          <h3 className="font-bold">1,234</h3>
          <p className="text-xs text-gray-300">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
