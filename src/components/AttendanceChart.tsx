"use client";

import Image from "next/image";
import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 58,
    absent: 32,
  },
  {
    name: "Tue",
    present: 65,
    absent: 25,
  },
  {
    name: "Wed",
    present: 76,
    absent: 24,
  },
  {
    name: "Thu",
    present: 84,
    absent: 6,
  },
  {
    name: "Fri",
    present: 78,
    absent: 12,
  },
];

const AttendanceChart = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Attendance</h2>
        <Image
          src={"/images/moreDark.png"}
          alt="more icon"
          width={20}
          height={20}
        />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DDD" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#D1D5DB" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#D1D5DB" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
