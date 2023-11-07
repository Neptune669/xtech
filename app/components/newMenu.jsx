import { FiUsers, FiChevronDown, FiNavigation, FiHome } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center p-8 ">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 transition-colors bg-indigo-500 rounded-md text-indigo-50 hover:bg-indigo-500"
        >
          <span className="text-sm font-medium">Menu</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Link href="/">
            <Option setOpen={setOpen} Icon={FiHome} text="Home" />
          </Link>
          <Link href="/portfolio">
            <Option setOpen={setOpen} Icon={FiUsers} text="portfolio" />
          </Link>
          <Link href="/about">
            <Option setOpen={setOpen} Icon={FiNavigation} text="About Us" />
          </Link>
          {/* <Option setOpen={setOpen} Icon={FiTrash} text="Remove" /> */}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center w-full gap-2 p-2 text-xs font-medium transition-colors rounded-md cursor-pointer whitespace-nowrap hover:bg-indigo-100 text-slate-700 hover:text-indigo-500"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
