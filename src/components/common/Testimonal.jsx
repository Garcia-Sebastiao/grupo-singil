import React from "react";
import { quoteIcon1, quoteIcon2 } from "../../assets";

export default function Testimonal({ image, description }) {
  return (
    <div className="flex flex-col flex-1 max-w-3xl items-start p-16 bg-white shadow-lg rounded-md">
      <img src="" alt="" />

      <span className="text-sm text-justify leading-relaxed italic relative text-gray-500">
        <img src={quoteIcon2} className="w-8 aboslute top-0 left-0" alt="" />
        {description}
        <img
          src={quoteIcon1}
          className="w-8 absolute -bottom-8 right-0"
          alt=""
        />
      </span>
    </div>
  );
}
