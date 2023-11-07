import Image from "next/image";
import NewHero from "./NewHero";

const PortfolioCard = ({ imgSrc, title, description }) => {
  return (
    <ul
      data-aos="flip-right"
      className="bg-[#F5F5F5] w-[300px] lg:w-[25rem] pb-6 flex flex-col gap-3 rounded-lg hover:shadow-xl shadow-md "
    >
      <li>
        <Image
          className="rounded-lg w-[350px] lg:w-[450px]"
          src={imgSrc}
          alt="Logo"
          width={450}
          height={450}
        />
      </li>
      <ul className="flex flex-col gap-3 px-8">
        <li className="text-3xl font-bold">{title}</li>
        <li className="text-sm font-semibold max-w-fit ">{description}</li>
        <li className="font-bold text-primary">Learn more &rarr;</li>
      </ul>
    </ul>
  );
};
const data = [
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
];
const PortfolioList = () => {
  return (
    <section className="py-12 mx-auto max-w-7xl">
      <main className="flex flex-col gap-6 ">
        <NewHero />
        <div className="flex flex-col gap-8 px-8 lg:grid md:gap-y-10 md:gap-x-9 md:grid-cols-3">
          {data.map((item, index) => {
            return <PortfolioCard key={index} {...item} />;
          })}
        </div>
      </main>
    </section>
  );
};

export default PortfolioList;
