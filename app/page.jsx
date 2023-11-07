import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import Solutions from "./components/Solutions";
import NavBar from "./components/NavBar";
import LogoSlider from "./components/LogoSlider";
import Software from "./components/Software";
import Team from "./components/team";
import Join from "./components/Join";
export default function Home() {
  return (
    <>
      <Hero
        TitleOne={"Applications"}
        TitleTwo={"Made fun"}
        Description={
          "Appropriately communicate one-to-one technology after plug-and-play networks. Quickly aggregate B2B users and worldwide resource-leveling potentialities."
        }
      />
      <main className="flex flex-col gap-12 ">
        <Cards />

        <Technology
          title={"Technology"}
          titleTwo={"for Innovators"}
          ImgSrc={"/technology.png"}
        />

        <Solutions />

        <Software />

        <LogoSlider />

        <Team />

        <Join />
      </main>
    </>
  );
}
