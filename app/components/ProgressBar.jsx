// ProgressBar.js
"use client";
import React from "react";
import * as Progress from "@radix-ui/react-progress";

const ProgressBar = ({ progress }) => {
  return (
    <Progress.Root
      className="relative overflow-hidden  bg-neutral-200 rounded-full w-[350px] h-[8px]"
      style={{
        transform: "translateZ(100) ",
      }}
      value={progress}
    >
      <Progress.Indicator
        className="bg-primary w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{
          transform: `translateX(-${100 - progress}%)`,
        }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;
