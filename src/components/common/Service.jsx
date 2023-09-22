import React from "react";
import { motion } from "framer-motion";
import { scaleAnimation } from "../../hooks/useAnimations";

export default function Service({ image, title, children }) {
  return (
    <motion.div
      initial={scaleAnimation.initial}
      whileInView={scaleAnimation.animate}
      transition={scaleAnimation.transition}
      className="flex border-[1px] border-gray-200 rounded-md max-w-md"
    >
      <div className="w-[160px] flex-none h-auto">
        <img
          src={image}
          className="w-full rounded-l-md rounded-r-3xl h-full object-cover"
          alt=""
        />
      </div>

      <div className="flex flex-col items-start gap-4 p-4">
        <h2>{title}</h2>

        {children}
      </div>
    </motion.div>
  );
}
