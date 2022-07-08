import React from "react";
import SectionTitleSmall from "./SectionTitleSmall";
import Marquee from "react-fast-marquee";

const ComingSoonSection = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <div className="text-center pb-[53px]">
          <SectionTitleSmall title={"THE PIPELINE"} />
          <h2 className="title_lg">COMING SOON</h2>
        </div>
      </div>
      <Marquee speed={200} gradient={false}>
        <div className="flex gap-5">
          <img src="/img/pipeline_1.png" alt="pipeline_1" />
          <img src="/img/pipeline_2.png" alt="pipeline_2" />
          <img src="/img/pipeline_3.png" alt="pipeline_3" />
        </div>
      </Marquee>
    </section>
  );
};

export default ComingSoonSection;
