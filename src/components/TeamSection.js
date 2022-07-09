import React from "react";
import { teams } from "../config/constants";
import Card from "./Card";
import SectionTitleSmall from "./SectionTitleSmall";

const TeamSection = () => {
  return (
    <section id="team" className="pt-[170px] pb-[100px] bg-white/5">
      <div className="container">
        <div className="text-center">
          <SectionTitleSmall title={"WHO WE ARE"} />
          <h2 className="title_lg">THE TEAM</h2>
        </div>

        <div className="mt-[53px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teams.map((team, i) => (
            <Card {...team} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
