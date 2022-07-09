import React from "react";
import { roadmaps } from "../config/constants";
import SectionTitleSmall from "./SectionTitleSmall";
import RoadmapCard from "./RoadmapCard";

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="pt-[200px] pb-[140px]">
      <div className="container">
        <div className="text-center">
          <SectionTitleSmall title={"GOALS & MILESTONES"} />
          <h2 className="title_lg">ROADMAP</h2>
        </div>

        <div className="pt-[25px] mt-[60px] relative">
          <img
            src="/img/roadmap_line.png"
            alt="roadmap"
            className="absolute top-0 left-1/2 -translate-x-1/2 h-full hidden md:block"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[140px]">
            {roadmaps.map((roadmap, i) => (
              <RoadmapCard {...roadmap} isLeft={(i + 1) % 2 === 0} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
