import React from "react";
import SectionTitleSmall from "./SectionTitleSmall";

const OurAdvisiorSection = () => {
  return (
    <section className="pt-[100px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <div>
              <SectionTitleSmall title={"OUR ADVISOR"} hideLeftIcon />
              <h2 className="title_lg">KIERAN WARWICK</h2>
              <p className="body_text font-inter mt-5">
                Kieran is the Co-Founder of{" "}
                <a
                  href="https://www.illuvium.io/"
                  rel="noreferrer"
                  target={"_blank"}
                  className="text-secondary hover:opacity-80"
                >
                  Illuvium
                </a>
                . Illuvium are building the first AAA NFT-based blockchain game
                and are poised to release in the coming weeks.
              </p>
              <p className="mt-5 body_text font-inter">
                Kieran's advisory role can prove to be priceless when accessing
                investment opportunities that are usually only available to
                large funds and helps us position ourselves as a premium PFP
                project within GameFi.
              </p>
            </div>
          </div>

          <div className="relative">
            <img src="/img/advisor_bg.png" alt="advisor_bg" />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[300px]">
              <img src="/img/advisor.png" alt="advisor" />

              <div className="absolute w-[120px] h-[120px] rounded-full overflow-hidden right-[-30px] bottom-[-30px]">
                <img src="/img/advisor_nft.png" alt="advisor_nft" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAdvisiorSection;
