"use client";
import ProgressBar from "./ProgressBar";
import SectionHeader from "./SectionHeader";
const Innovators = () => {
  return (
    <section>
      <main className="px-8 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6">
          <SectionHeader
            title={"Creating Technology"}
            titleTwo={"for Innovators"}
          />
          <div className="grid lg:grid-cols-3 gap-x-3 ">
            <div className="flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                <li className="flex flex-col gap-2">
                  <p>Team work</p>
                  <ProgressBar progress={90} />
                </li>
                <li className="flex flex-col gap-2">
                  <p>Benefits</p>
                  <ProgressBar progress={85} />
                </li>
                <li className="flex flex-col gap-2">
                  <p>Personal Growth</p>
                  <ProgressBar progress={75} />
                </li>
              </ul>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </p>
            </div>
            <div className="">
              <p>
                Credibly innovate granular internal or organic sources whereas
                high standards in web-readiness. Energistically scale
                future-proof core competencies vis-a-vis impactful experiences.
                Dramatically synthesize integrated schemas with optimal
                networks. <br /> <br />
                Interactively procrastinate high-payoff content without
                backward-compatible data. Quickly cultivate optimal processes
                and tactical architectures. Completely iterate covalent
                strategic theme areas via accurate e-markets. <br /> <br />
                Quickly drive clicks-and-mortar catalysts for change before
                vertical architectures.
              </p>
            </div>
            <div className="">
              <p>
                Enthusiastically mesh long-term high-impact infrastructures
                vis-a-vis efficient customer service. Professionally fashion
                wireless leadership rather than prospective experiences.
                Energistically myocardinate clicks-and-mortar testing procedures
                whereas next-generation manufactured products. <br /> <br />{" "}
                Dynamically reinvent market-driven opportunities and ubiquitous
                interfaces. Energistically fabricate an expanded array of niche
                markets. <br /> <br /> Sometimes the best way to envision the
                future is to invent it.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Innovators;
