import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="min-w-[130px] flex-1 p-4 rounded-2xl odd:bg-lamaPurpul even:bg-lamaYellow">
      <div className="flex justify-between items-center">
        <span className="bg-white text-[10px] text-green-600 px-2 py-1 rounded-full">
          2024/09
        </span>
        <Image
          src={"/images/more.png"}
          alt="more icon"
          width={20}
          height={20}
        />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm text-gray-500 font-medium">{type}</h2>
    </div>
  );
};

export default UserCard;
