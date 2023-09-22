import React from "react";

export default function Member({ image, name, role }) {
  return (
    <div className="flex items-center flex-col gap-6">
      <div className="w-44 h-44 rounded-full">
        <img src={image} className="w-full h-full object-cover rounded-full" alt="" />
      </div>

      <div className="flex flex-col gap-1 items-center">
        <h2 className="text-xl text-primary-text font-poppinsSemiBold ">{name}</h2>
        <span className="text-gray-400 italic text-sm">{role}</span>
      </div>
    </div>
  );
}
