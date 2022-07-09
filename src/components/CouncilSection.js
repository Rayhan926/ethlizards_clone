import React from "react";
import { councils } from "../config/constants";
import Card from "./Card";
import SectionTitleSmall from "./SectionTitleSmall";

const CouncilSection = () => {
  return (
    <section className="pt-20 pb-[100px] bg-white/5">
      <div className="container">
        <div className="text-center">
          <SectionTitleSmall title={"ETHLIZARDS' COUNCIL MEMBERS"} />
          <h2 className="title_lg">THE COUNCIL</h2>
        </div>

        <div className="mt-[53px] flex justify-center flex-wrap">
          {councils.map((council, i) => (
            <div
              className="px-[22px] w-full sm:w-1/2 lg:w-1/3 mb-[33px]"
              key={i}
            >
              <Card {...council} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CouncilSection;
