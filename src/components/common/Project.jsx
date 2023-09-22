import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  fadeAnimation,
  scaleAnimation,
  fromBottom,
} from "../../hooks/useAnimations";

export default function Project({ image, link, detail, title }) {
  const [showDetails, setShowDetails] = useState();

  return (
    <motion.div
      initial={fromBottom.initial}
      whileInView={fromBottom.animate}
      transition={fromBottom.transition}
      onMouseOver={() => setShowDetails(true)}
      className="rounded-xl relative flex-1 min-w-fit h-64"
    >
      <img
        src={image}
        className="object-cover w-full h-full rounded-xl cursor-zoom-out"
        alt=""
      />

      <motion.div
        initial={fadeAnimation.initial}
        whileInView={fadeAnimation.animate}
        transition={fadeAnimation.transition}
        onMouseLeave={() => setShowDetails(false)}
        className={`absolute top-0 left-0 w-full h-full bg-[#00000099] rounded-xl ${
          showDetails ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-full relative">
          <p className="absolute top-5 left-5 p-2 bg-primary-color text-white text-xs">
            {title}
          </p>
          <div className="absolute bottom-8 left-5 flex flex-col gap-1">
            <a className="" href={link || "#"}>
              <h2 className="text-lg font-poppinsMedium text-white">
                {title || "Projecto Singil"}
              </h2>
            </a>

            <span className="text-gray-300 text-xs italic">{detail}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
