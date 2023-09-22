import React from "react";
import { motion } from "framer-motion";
import { fromBottom } from "../../hooks/useAnimations";

export default function Text({ children, className }) {
  return (
    <motion.p
      initial={fromBottom.initial}
      whileInView={fromBottom.animate}
      transition={fromBottom.transition}
      className={`${className} text-primary-text leading-loose text-sm`}
    >
      {children}
    </motion.p>
  );
}
