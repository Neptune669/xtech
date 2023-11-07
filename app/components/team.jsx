import Image from "next/image";
import SectionHeader from "./SectionHeader";

const Card = ({ imgSrc, description, name, aos }) => {
  return (
    <div data-aos={aos} className="flex flex-col gap-4">
      {imgSrc && (
        <figure>
          <Image src={imgSrc} width={1200} height={1200} alt="person" />
        </figure>
      )}
      {name && (
        <h1 className="text-3xl font-extrabold text-secondary">{name}</h1>
      )}{" "}
      {description && <p className="lg:w-[90%] lg:text-lg">{description}</p>}
      <button className="px-4 py-3 text-sm font-bold text-white w-fit btn bg-primary">
        read more
      </button>
    </div>
  );
};

const data = [
  {
    imgSrc: "/img-people-01.png",
    name: "Calvin Wilxcox",
    description:
      "Credibly innovate granular internal or organic sources whereas high standards in web-readiness.",
    aos: "flip-right",
  },
  {
    imgSrc: "/img-people-02.png",
    name: "Lorene Howard",
    description:
      "Credibly innovate granular internal or organic sources whereas high standards in web-readiness.",
    aos: "flip-left",
  },
  {
    imgSrc: "/img-people-03.png",
    name: "Beth Carver",
    description:
      "Credibly innovate granular internal or organic sources whereas high standards in web-readiness.",
    aos: "flip-right",
  },
];

const Team = () => {
  return (
    <section className="flex flex-col gap-6 px-8 py-24 mx-auto max-w-7xl">
      <div className="flex flex-col gap-6 mx-auto gap-x-16 max-w-7xl">
        <ul className="flex flex-col gap-6 w-fit">
          <SectionHeader title="Great Software" titleTwo="with Codiqa Team" />
          <p className="lg:w-1/2">
            Completely synergize resource taxing relationships via premier niche
            markets. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </ul>
        <div className="grid lg:grid-cols-3 gap-9">
          {data.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
