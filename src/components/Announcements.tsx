import React from "react";

// TEMPORARY
const announcements = [
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

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-xl">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold my-4">Announcements</h2>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      {/* ANNOUNCEMENTS */}
      <div className="flex flex-col gap-4 mt-4">
        <ul className="flex flex-col gap-4">
          {announcements.map((announcement) => (
            <li
              key={announcement.id}
              className="p-4 rounded-md border-gray-100 odd:bg-lamaSkyLight even:bg-lamaPurpulLight"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-600">
                  {announcement.title}
                </h3>
                <span className="text-xs text-gray-400 bg-white rounded-md p-1">
                  {announcement.time}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                {announcement.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Announcements;
