import React from "react";
import SectionTitleSmall from "./SectionTitleSmall";

const AboutSection = () => {
  return (
    <section
      style={{
        background: 'url("/img/about_section_bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="pt-[110px] min-h-[700px]"
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-10">
          <div className="relative">
            <div className="w-[270px] p-6 backdrop-blur-[20px] bg-white/5 absolute left-[15px] top-[50px] rotate-[-15deg] z-[2]">
              <img src="/img/about_1.png" alt="About" />
              <div className="mt-[18px] flex items-center justify-between">
                <div>
                  <div className="w-[115px] h-[15px] bg-white/10"></div>
                  <div className="w-[75px] h-[8px] mt-2.5 bg-white/10"></div>
                </div>
                <div className="w-7 h-7 shrink-0 rounded-full bg-white/10"></div>
              </div>
            </div>
            <div className="w-[270px] p-5 bg-white/5 absolute right-5 top-[120px] rotate-[15deg]">
              <img src="/img/about_2.png" alt="About" />
              <div className="mt-[15px] flex items-start justify-between">
                <div>
                  <div className="w-[98px] h-[13px] bg-white/10"></div>
                  <div className="w-[64px] h-[7px] mt-2.5 bg-white/10"></div>
                </div>
                <div className="w-6 h-6 shrink-0 rounded-full bg-white/10"></div>
              </div>
            </div>
          </div>

          <div className="pt-20">
            <SectionTitleSmall
              title={"THE UNDERGROUND LIZARD LOUNGE"}
              hideLeftIcon
            />
            <h2 className="title_lg">ABOUT ETHLIZARDS</h2>
            <p className="body_text font-inter mt-[46px] pb-5">
              An NFT collection of 5,050 Ethlizards just vibin' and chillin' in
              their Underground Lounge. Every Ethlizard is unique, composed
              using over 100 hand-drawn traits.
            </p>

            <p className="body_text font-inter">
              Ethlizards is a GameFi Investment DAO, aiming to utilize its
              excellent connections within the industry to gain access to
              pre-seed and seed investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
