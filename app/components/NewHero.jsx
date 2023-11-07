import Image from "next/image";
import NewSectionHeader from "./NewSectionHeader";

const NewHero = ({ description }) => {
  return (
    <section className="flex justify-center ">
      <ul className="flex flex-col items-center gap-4">
        <li>
          <Image src="/favicon.png" alt="Logo" width={180} height={180} />
        </li>
        <li>
          <NewSectionHeader
            title={"People Making"}
            titleTwo={"Technology Work"}
          />
        </li>
        <li className="text-center lg:w-[40%]">
          {description}
          {/*  */}
        </li>
      </ul>
    </section>
  );
};

export default NewHero;
