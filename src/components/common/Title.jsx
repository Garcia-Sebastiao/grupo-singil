import React from "react";

export default function Title({ children, className }) {
  return (
    <h2 className={`${className} text-center text-2xl font-poppinsBold`}>{children}</h2>
  );
}
