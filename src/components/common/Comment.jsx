import React from "react";
export default function Comment({ image, name, date, description }) {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex w-full items-start gap-4">
        <div className="w-14 flex-none h-14 rounded-full">
          <img
            src={image}
            className="w-full h-full rounded-full object-cover"
            alt=""
          />
        </div>

        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-col">
            <h3 className="text-md text-gray-700">{name}</h3>
            <span className="text-xs text-gray-500">{date}</span>
          </div>

          <div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-200"></div>
    </div>
  );
}
