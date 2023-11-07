import Image from "next/image";
const Solutions = () => {
  const items = [
    {
      image: "mobile.svg",
      alt: "Solution 1",
      title: "Online at all times",
      description:
        "Nanotechnology immersion of the information highway will close the loop on bottom line.",
      aos: "fade-right",
    },
    {
      image: "conect.svg",
      alt: "Solution 1",
      title: "Online at all times",
      description:
        "Nanotechnology immersion of the information highway will close the loop on bottom line.",
      aos: "fade-left",
    },
    {
      image: "multi.svg",
      alt: "Solution 1",
      title: "Online at all times",
      description:
        "Nanotechnology immersion of the information highway will close the loop on bottom line.",
      aos: "fade-right",
    },
    {
      image: "lang.svg",
      alt: "Solution 1",
      title: "Online at all times",
      description:
        "Nanotechnology immersion of the information highway will close the loop on bottom line.",
      aos: "fade-left",
    },
    {
      image: "media.svg",
      alt: "Solution 1",
      title: "Online at all times",
      description:
        "Nanotechnology immersion of the information highway will close the loop on bottom line.",
      aos: "fade-right",
    },
    {
      image: "sharing.svg",
      alt: "Solution 1",
      title: "Online at all times",
      description:
        "Nanotechnology immersion of the information highway will close the loop on bottom line.",
      aos: "fade-left",
    },
    {
      image: "wiz.svg",
      alt: "Solution 1",
      title: "Online at all times",
      description:
        "Nanotechnology immersion of the information highway will close the loop on bottom line.",
      aos: "fade-right",
    },
    {
      image: "vir.svg",
      alt: "Solution 1",
      title: "Online at all times",
      description:
        "Nanotechnology immersion of the information highway will close the loop on bottom line.",
      aos: "fade-left",
    },
  ];
  return (
    <section
      data-aos="fade-up"
      className="flex flex-col gap-16 px-8 py-10 mx-auto font-bold max-w-7xl"
    >
      <header>
        <h1 className="text-4xl lg:text-5xl text-primary">
          Simple Solutions for <br />
          <span className="text-secondary">Complex Challenges</span>
        </h1>
      </header>
      <main className="flex flex-col gap-8">
        <div className="grid gap-4 font-normal gap-y-10 lg:grid-cols-4 lg:gap-6 lg:gap-y-20">
          {items.map((item, index, aos) => (
            <div
              data-aos={item.aos}
              key={index}
              className="flex flex-col gap-2 text-start lg:text-center"
            >
              {item.image && (
                <figure>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={70}
                    height={70}
                  />
                </figure>
              )}
              {item.title && <h3 className="text-[#181818]">{item.title}</h3>}
              {item.description && (
                <p className="text-sm text-[#181818] text-start">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6">
          <button className="btn bg-[#210D94] w-fit py-2 px-4 lg:py-4 text-white">
            View more features
          </button>
          <button className="white-btn bg-primary bg-[#fb17ce] w-fit px-4 py-2 lg:py-4 text-white">
            View more features
          </button>
        </div>
      </main>
    </section>
  );
};

export default Solutions;
