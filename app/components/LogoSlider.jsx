import Marquee from "react-fast-marquee";
import Image from "next/image";
const logos = [
  {
    image: "/logo-applauz.png",
  },
  {
    image: "/logo-avantage.png",
  },
  {
    image: "/logo-bello.png",
  },
  {
    image: "/logo-estato.png",
  },
  {
    image: "/logo-hotel-berg.png",
  },
  {
    image: "/logo-hotel-california.png",
  },
  {
    image: "/logo-urbanist.png",
  },
];
const LogoSlider = () => {
  return (
    <section className="py-8 min-w-full bg-[#d6d6d6d0] my-12">
      <Marquee pauseOnHover autofill duration={20}>
        <div className="flex gap-24">
          {logos.map(({ image, index }) => {
            return (
              <figure key={index} className="flex bg-inherit">
                <Image
                  key={index}
                  src={image}
                  alt="logo"
                  width={150}
                  height={150}
                />
              </figure>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};

export default LogoSlider;
