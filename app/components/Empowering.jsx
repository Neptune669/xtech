"use clint";
import Image from "next/image";
const Card = ({ icon, title, Description }) => {
  return (
    <ul data-aos="fade-down" className="flex flex-col items-center gap-4 ">
      <li>
        <figure>
          <Image src={icon} alt="icon" width={60} height={60}></Image>
        </figure>
      </li>
      <li className="text-3xl font-extrabold text-primary">{title}</li>
      <li className="w-[90%]  text-center">{Description}</li>
    </ul>
  );
};
const data = [
  {
    icon: "/team.svg",
    title: "Satisfaction",
    Description:
      "Quickly coordinate e-business applications through catalysts for change.",
  },
  {
    icon: "/team.svg",
    title: "Satisfaction",
    Description:
      "Quickly coordinate e-business applications through catalysts for change.",
  },
  {
    icon: "/team.svg",
    title: "Satisfaction",
    Description:
      "Quickly coordinate e-business applications through catalysts for change.",
  },
];
const Empowering = () => {
  return (
    <section className="py-16 ">
      <main className="flex flex-col self-start justify-between gap-20 px-8 lg:flex-row ">
        <figure className="w-full" data-aos="fade-right">
          <Image
            src="/img-services.png"
            width={650}
            height={650}
            alt="img-services"
          />
        </figure>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl lg:text-5xl">
            Empowering the <br />
            <span className="font-bold text-primary">Internet Generation</span>
          </h1>
          <ul
            data-aos="fade-up"
            className="grid font-semibold gap-y-10 lg:grid-cols-2 "
          >
            <li className="w-[80%]">
              Collaboratively administrate turnkey channels whereas virtual
              e-tailers. Objectively seize scalable metrics whereas proactive
              e-services.
            </li>
            <li className="w-[80%]">
              Distinctively exploit optimal alignments for intuitive bandwidth.
              Quickly coordinate e-business applications through revolutionary
              catalysts for change.
            </li>
          </ul>
          <div className="grid gap-y-4 lg:grid-cols-3 ">
            {data.map((item, index) => {
              return <Card key={index} {...item} />;
            })}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Empowering;
