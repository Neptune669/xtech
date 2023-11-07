import Empowering from "../components/Empowering";
import LogoSlider from "../components/LogoSlider";
import NewHero from "../components/NewHero";
import ServiceSolutions from "../components/ServiceSolutions";
import Touch from "../components/Touch";

const page = () => {
  return (
    <main>
      <NewHero description="Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences." />
      <ServiceSolutions />
      <Empowering />
      <LogoSlider />
      <Touch />
    </main>
  );
};

export default page;
