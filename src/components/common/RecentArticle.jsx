import React from "react";

export default function RecentArticle({ image, title, date }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-20 flex-none h-16">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>

      <div className="flex flex-col items-start gap-1">
        <h4 className="text-sm text-gray-600 font-poppinsSemiBold">{title}</h4>
        <span className="text-gray-400 text-xs italic">{date}</span>
      </div>
    </div>
  );
}
