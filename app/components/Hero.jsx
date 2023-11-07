import Image from "next/image";
const Hero = ({ FlexDirection, TitleOne, TitleTwo, Description }) => {
  return (
    <section className="px-8 ">
      <div
        data-oas="fade-down"
        className={`flex px-8 justify-center items-center mb-20 py-14 ${FlexDirection}`}
      >
        {/* <figure className="hidden lg:block">
          <Image src="/hero.png" alt="Hero" width={700} height={700} />
        </figure> */}
        <div className="flex flex-col gap-8 w-[40rem]">
          <h1 className="flex flex-col gap-2 text-4xl lg:text-7xl ">
            {TitleOne}{" "}
            <span className="text-[#0C356A]  font-bold">{TitleTwo}</span>
          </h1>
          <p className="text-xl font-light lg:text-3xl ">{Description}</p>
          <div className="flex items-center gap-4 mt-6 ">
            <button className="lg:px-10 px-6 py-1 lg:py-4 text-center white-btn bg-[#0C356A] text-white  font-extrabold hover:shadow-2xl">
              Explore Products
            </button>
            <button className="lg:px-10 px-6 py-1 lg:py-4 text-center white-btn bg-[#0C356A] text-white  font-extrabold hover:shadow-2xl">
              Explore Products
            </button>
          </div>
        </div>
        <div className="w-[3rem]"></div>
      </div>
    </section>
  );
};

export default Hero;
