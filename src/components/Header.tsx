import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-x-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image
          src={"/images/search.png"}
          alt="search icon"
          width={14}
          height={14}
          aria-hidden={true}
        />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="bg-transparent w-[200px] p-2 outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="w-full flex justify-end items-center gap-x-6">
        <div className="cursor-pointer w-7 h-7 flex justify-center items-center bg-white rounded-full">
          <Image
            src={"/images/message.png"}
            alt="search icon"
            width={14}
            height={14}
            aria-hidden={true}
          />
        </div>
        <div className="cursor-pointer relative w-7 h-7 flex justify-center items-center bg-white rounded-full">
          <Image
            src={"/images/announcement.png"}
            alt="search icon"
            width={14}
            height={14}
            aria-hidden={true}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex justify-center items-center bg-purple-500 text-sm text-white rounded-full">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Chermann KING</span>
          <span className="text-[0.625rem] text-gray-500 text-right">
            Admin
          </span>
        </div>
        <Image
          src={"/images/avatar.png"}
          alt={`avatar`}
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
