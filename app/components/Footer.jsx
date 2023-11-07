import Image from "next/image";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
const Footer = () => {
  return (
    <section className="px-8  mr-auto pt-14 mt-6 text-white bg-[#210D94] rounded-tr-[150px] ">
      <div className="grid mx-auto lg:grid-cols-4 gap-y-16 py-14 max-w-7xl gap-x-12">
        <ul className="flex flex-col gap-3">
          <li className="self-start">
            <h1 className="text-4xl font-bold text-black ">Xtech</h1>{" "}
          </li>
          <li>
            Objectively integrate enterprise wide strategic theme areas with
            functionalized infrastructures. Interactively productize premium
            mobile technologies.
          </li>
          <ul className="flex flex-col gap-0 font-bold">
            <li>123456789</li>
            <li>support.com</li>
            <li>support.com</li>
          </ul>
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="text-3xl font-bold">Applications</li>
          <ul className="flex flex-col gap-6 ">
            <li className="border-b hover:text-neutral-500 border-[#ffffff52] py-2 w-fit">
              our products
            </li>
            <li className="border-b hover:text-neutral-500 border-[#ffffff52] py-2 w-fit">
              our products
            </li>
            <li className="border-b hover:text-neutral-500 border-[#ffffff52] py-2 w-fit">
              our products
            </li>
            <li className="hover:text-neutral-500">our products</li>
          </ul>
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="text-3xl font-bold">Codiqa</li>
          <ul className="flex flex-col gap-6 ">
            <li className="border-b hover:text-neutral-500 border-[#ffffff52] py-2 w-fit">
              about us
            </li>
            <li className="border-b hover:text-neutral-500 border-[#ffffff52] py-2 w-fit">
              about us
            </li>
            <li className="border-b hover:text-neutral-500 border-[#ffffff52] py-2 w-fit">
              about us
            </li>
            <li className="hover:text-neutral-500">about us</li>
          </ul>
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="text-3xl font-bold">Connect</li>
          <ul className="flex gap-4">
            <li className="">
              <FiFacebook size={25} className="hover:scale-125" />
            </li>
            <li>
              <FiTwitter size={25} className="hover:scale-125" />
            </li>
            <li>
              <FiInstagram size={25} className="hover:scale-125" />
            </li>
            <li>
              <FiLinkedin size={25} className="hover:scale-125" />
            </li>
          </ul>
          <li>
            Keep up to date with latest news and update about Codiqa, simply
            subscribe with your email address.
          </li>
          <li className="relative px-2 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="absolute z-50 w-6 h-6 right-5 top-[17px] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>

            <input
              type="text"
              placeholder="Emil Address"
              className="z-10 px-6 py-4 rounded-full "
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
