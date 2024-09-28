import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
// import EventCalendar from "@/components/EventCalendar";
import React from "react";

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full min-h-[880px] bg-white p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">
            Schedule (Djabi MOUSSAVOU)
          </h2>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* <EventCalendar /> */}
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
