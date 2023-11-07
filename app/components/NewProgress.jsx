"use clint";
import React from "react";

const NewProgressBar = ({ progress, children }) => {
  const radius = 100; // Radius of the circular progress bar

  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-[200px] h-[200px]">
      <svg className="absolute inset-0" viewBox="0 0 200 200">
        <circle
          className="text-neutral-200 stroke-neutral-300"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="8"
        />
        <circle
          className="text-primary stroke-primary"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="8"
          strokeLinecap="round"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default NewProgressBar;
