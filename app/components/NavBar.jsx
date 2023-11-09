"use client";
import Image from "next/image";
import search from "../assets/search.svg";
import { FiTriangle } from "react-icons/fi";
import Link from "next/link";
import NewMenu from "./newMenu";
import Button from "./Button";
const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 px-8 mx-auto bg-white ">
      <nav className="flex items-center justify-between py-4 ">
        <div className="flex items-center gap-20">
          <figure className="flex items-center">
            <h1 className="text-3xl font-extrabold">Xtech</h1>
          </figure>
          <ul className="hidden lg:flex lg:items-center lg:gap-4 ">
            <li className="hover:text-[#0C356A]">
              {" "}
              <Link href="/">Home</Link>{" "}
            </li>
            <li className="hover:text-[#0C356A]">
              <Link href="/about">About us</Link>
            </li>
            <li className="hover:text-[#0C356A]">
              <Link href="/services">Services</Link>{" "}
            </li>
            <li className="hover:text-[#0C356A]">
              <Link href="/portfolio">Portfolio</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {/* <button className="flex items-center gap-2 px-3 py-2 text-sm font-extrabold bg-[#0C356A] text-white btn">
            <Image src={save} alt="Search" width={20} height={20} /> Clint Area
          </button> */}
          <Button targetText="Client area" icon={<FiTriangle />} />
          <button className="flex items-center gap-2 text-sm font-extrabold text-white ">
            <Image src={search} alt="Search" width={20} height={20} />
          </button>
        </div>
        <div className="block lg:hidden">
          <NewMenu />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
