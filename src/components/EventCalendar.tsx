"use client";

// import { time } from "console";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "10:00 AM - 12:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Dolor ipsum lorem",
    time: "1:30 PM - 2:30 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Ipsum lorem dolor",
    time: "3:00 PM - 5:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-xl">
      <Calendar onChange={onChange} value={value} />

      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold my-4">Events</h2>
        <Image
          src={"/images/moreDark.png"}
          alt="more icon"
          width={20}
          height={20}
        />
      </div>
      {/* EVENTS */}
      <ul className="flex flex-col gap-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="p-5 rounded-md border-2 border-t-4 border-gray-100 odd:border-t-lamaSky even:border-t-lamaPurpul"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-600">{event.title}</h3>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventCalendar;
