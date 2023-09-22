import React from "react";
import { authorIcon, folderIcon, rightIcon } from "../../assets";
import { motion } from "framer-motion";
import { fromBottom } from "../../hooks/useAnimations";

export default function Article({ image, title, date, author, category }) {
  return (
    <motion.div
      initial={fromBottom.initial}
      whileInView={fromBottom.animate}
      transition={fromBottom.transition}
      className="shadow-lg bg-white flex-1 min-w-fit max-w-[100px] rounded-lg"
    >
      <div className=" relative w-full h-56 rounded-t-lg">
        <img
          src={image}
          className="w-full rounded-t-lg h-full object-cover object-center"
          alt=""
        />

        <div className="absolute right-0 bottom-0 bg-primary-color p-2">
          <span className="text-white text-sm font-poppinsMedium">{date} </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-start p-4">
        <h2 className="text-2xl font-poppinsSemiBold max-w-xs text-primary-text">
          {title}
        </h2>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img className="w-5" src={authorIcon} alt="" />
            <span className="text-gray-400 text-sm">{author}</span>
          </div>

          <span className="text-gray-400 text-sm">/</span>

          <div className="flex items-center gap-2">
            <img className="w-5" src={folderIcon} alt="" />
            <span className="text-gray-400 text-sm">{category}</span>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-300"></div>

        <a
          href="/blog_details"
          className="flex outline-none hover:text-primary-color transition duration-150 items-center gap-2 text-sm text-gray-400 font-poppinsMedium"
        >
          Ler mais
          <img src={rightIcon} className="w-4" alt="" />
        </a>
      </div>
    </motion.div>
  );
}
