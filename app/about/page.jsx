import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Solutions from "../components/Solutions";
import Technology from "../components/Technology";
import Team from "../components/team";
import LogoSlider from "../components/LogoSlider";
import Innovators from "../components/Innovators";

const About = () => {
  return (
    <section className="flex flex-col gap-12">
      <Hero
        FlexDirection={"flex-row-reverse"}
        TitleOne={"Empowering"}
        TitleTwo={"Right People"}
        Description={
          "Appropriately communicate one-to-one technology after plug-and-play networks. Quickly aggregate B2B users and worldwide resource-leveling potentialities."
        }
      />
      <Solutions />
      <Innovators />
      <Technology
        title={"These are"}
        titleTwo={"Our Numbers"}
        ImgSrc={"/about us.png"}
      />
      <Cards />

      <Team />
      <LogoSlider />
    </section>
  );
};

export default About;
