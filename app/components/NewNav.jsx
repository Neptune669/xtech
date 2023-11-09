"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const tabs = ["Home", "about", "portfolio"];

const ChipTabs = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setSelected(tab);
    router.push(`/${tab.toLowerCase()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 px-4 py-14 bg-slate-900">
      {tabs.map((tab) => (
        <button
          onClick={() => handleTabClick(tab)}
          className={`${
            selected
              ? "text-white"
              : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
          } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
          key={tab}
        >
          <span className="relative z-10">{tab}</span>
          {selected === tab && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ChipTabs;
