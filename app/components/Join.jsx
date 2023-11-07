import Image from "next/image";
import SectionHeader from "./SectionHeader";

const IconCard = ({ IconSrc, Title, Description, aos }) => {
  return (
    <ul
      data-aos={aos}
      className="flex flex-col items-center justify-center gap-4 "
    >
      <li>
        {IconSrc && (
          <Image src={IconSrc} alt="Icon" width={50} height={50}></Image>
        )}{" "}
      </li>
      {Title && <li className="text-lg font-bold"> {Title}</li>}
      {Description && (
        <li className="w-3/4 text-sm text-neutral-400"> {Description}</li>
      )}{" "}
    </ul>
  );
};
const IconCardData = [
  {
    IconSrc: "/like.svg",
    Title: "Great Software",
    Description: "Phosfluorescently leverage others high impact solutions",
    aos: "fade-right",
  },
  {
    IconSrc: "/like.svg",
    Title: "Great Software",
    Description: "Phosfluorescently leverage others high impact solutions",
    aos: "fade-left",
  },
  {
    IconSrc: "/like.svg",
    Title: "Great Software",
    Description: "Phosfluorescently leverage others high impact solutions",
    aos: "fade-left",
  },
  {
    IconSrc: "/like.svg",
    Title: "Great Software",
    Description: "Phosfluorescently leverage others high impact solutions",
    aos: "fade-right",
  },
  {
    IconSrc: "/like.svg",
    Title: "Great Software",
    Description: "Phosfluorescently leverage others high impact solutions",
    aos: "fade-right",
  },
  {
    IconSrc: "/like.svg",
    Title: "Great Software",
    Description: "Phosfluorescently leverage others high impact solutions",
    aos: "fade-left",
  },
];

const Join = () => {
  return (
    <section className="">
      <main className="flex flex-col gap-10 px-8 mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 ">
          <SectionHeader title="Great Software" titleTwo="with Codiqa Team" />
          <p className="lg:w-1/2">
            Enthusiastically leverage existing premium quality vectors with
            enterprise wide innovation. Phosfluorescently leverage others high
            impact solutions outside the box thinking with e-business ideas.
          </p>
        </div>
        <div className="border-b border-[#0000002b]"></div>
        <div className="flex flex-col gap-4 lg:gap-2 lg:grid lg:grid-cols-6 ">
          {IconCardData.map((item, index) => {
            return <IconCard key={index} {...item} />;
          })}
        </div>
        <ul className="flex justify-center gap-4">
          <li>
            <button className="px-16 py-5 text-sm font-bold text-white btn bg-primary">
              Read more
            </button>{" "}
          </li>
          <li>
            <button className="px-16 py-5 text-sm font-bold text-white white-btn bg-secondary">
              Read more
            </button>{" "}
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Join;
