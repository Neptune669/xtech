import Image from "next/image";

const Card = ({ icon, RowOneDes, RowTwoDes, title }) => {
  return (
    <ul data-aos="flip-up" className="flex gap-3">
      <li>
        <figure>
          <Image src={icon} alt="icon" width={50} height={50} />
        </figure>
      </li>
      <li className="flex flex-col gap-2">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p>{RowOneDes}</p>
        <p>{RowTwoDes}</p>
      </li>
    </ul>
  );
};

const Data = [
  {
    icon: "/world.svg",
    title: "Main Office",
    RowOneDes: "3501 Middlefield Rd",
    RowTwoDes: "Menlo Park, CA 94025, USA",
  },
  {
    icon: "/world.svg",
    title: "Main Office",
    RowOneDes: "3501 Middlefield Rd",
    RowTwoDes: "Menlo Park, CA 94025, USA",
  },
  {
    icon: "/world.svg",
    title: "Main Office",
    RowOneDes: "3501 Middlefield Rd",
    RowTwoDes: "Menlo Park, CA 94025, USA",
  },
  {
    icon: "/world.svg",
    title: "Main Office",
    RowOneDes: "3501 Middlefield Rd",
    RowTwoDes: "Menlo Park, CA 94025, USA",
  },
];

const Touch = () => {
  return (
    <section>
      <main className="flex flex-col justify-between gap-4 px-8 mx-auto lg:flex-row max-w-7xl ">
        <ul className="flex flex-col gap-6">
          <li className="">
            <h1 className="text-4xl font-bold lg:text-5xl text-primary">
              Get In
              <span className="text-secondary">Touch</span>
            </h1>
          </li>
          <li>
            <p>
              Visit our agency or simply send us an email anytime you want. If
              you have any questions, please feel free to contact us.
            </p>
          </li>
          <li className="border-b"></li>
          <ul className="grid lg:grid-cols-2 gap-y-12">
            {Data.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </ul>
        </ul>
        <Image
          data-aos="fade-left"
          src="/about us.png"
          alt="img-touch"
          width={600}
          height={600}
        />
      </main>
    </section>
  );
};

export default Touch;
