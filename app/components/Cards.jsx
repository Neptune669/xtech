import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
const Cards = () => {
  return (
    <section data-aos="fade-right" className="px-8 mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-3 gap-y-12 gap-x-8 ">
        <div className=" w-fit bg-[#210D92] flex flex-col gap-3 pb-8  text-white">
          <figure>
            <Image src="/card-1.jpg" alt="Hero" width={700} height={700} />
          </figure>
          <div data-aos="fade-right" className="flex flex-col gap-4 px-4">
            <h1 className="text-3xl font-extrabold">
              Possibilities are Infinite
            </h1>
            <p>
              Credibly innovate granular internal or organic sources whereas
              high standards in web-readiness.
            </p>
            <button className="px-4 py-2 font-extrabold flex items-center gap-1 text-center w-fit text-[#ffff] ">
              Find out more {<FiArrowRight />}
            </button>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className=" w-fit bg-[#0C356A] flex flex-col gap-3 pb-8  text-white"
        >
          <figure>
            <Image src="/card-02.jpg" alt="Hero" width={700} height={700} />
          </figure>
          <div className="flex flex-col gap-4 px-4">
            <h1 className="text-3xl font-extrabold">Think Outside the Box </h1>
            <p>
              Quickly cultivate optimal processes and tactical architectures.
              Completely iterate covalent strategic theme areas.
            </p>
            <button className="px-4 py-2 font-extrabold flex items-center gap-1 text-center w-fit text-[#ffff] ">
              Find out more {<FiArrowRight />}
            </button>
          </div>
        </div>
        <div className=" w-fit bg-[#210D92] flex flex-col gap-3 pb-8  text-white">
          <figure>
            <Image src="/card-03.jpg" alt="Hero" width={700} height={700} />
          </figure>
          <div data-aos="fade-left" className="flex flex-col gap-4 px-4">
            <h1 className="text-3xl font-extrabold">
              Invent the Future with Codiqa{" "}
            </h1>
            <p>
              Synergistically deliver performance based methods of empowerment
              whereas distributed expertise.
            </p>
            <button className="px-4 py-2 font-extrabold flex items-center gap-1 text-center w-fit text-[#ffff] ">
              Find out more {<FiArrowRight />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
