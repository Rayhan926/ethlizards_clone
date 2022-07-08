import React from "react";
import SectionTitleSmall from "./SectionTitleSmall";

const visions = [
  "80% of Ethlizards' DAO funds reserved for early-stage GameFi investments/DeFi Investments.",
  "Drive value back to our NFT holders through investments.",
  "Opportunity to experience seed/pre-seed investment deals normally only available to large funds.",
  "Position ourselves as the premium PFP project within GameFi.",
  "To become the largest investment DAO in GameFi.",
];

const OurVisionSection = () => {
  return (
    <section className="pt-20 pb-[120px]">
      <div className="container">
        <div className="text-center">
          <SectionTitleSmall title={"ETHLIZARDS' 5 POINT VISION"} />
          <h2 className="title_lg">OUR VISION</h2>
        </div>

        <div className="mt-[57px] max-w-[770px] mx-auto space-y-2.5">
          {visions.map((vision, i) => (
            <div className="body_text_md text-white/80 bg-white/5 text-left py-6 px-[29px] flex items-center gap-10 hover:text-white">
              <p className="font-space-mono text-[30px] leading-[34px] font-bold text-white shrink-0">
                {i + 1}
              </p>
              <p>{vision}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVisionSection;
