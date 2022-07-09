import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <video
        src="/media/hero_section_video.mp4"
        autoPlay
        loop
        poster="/img/video_poster.jpeg"
        className="w-full object-cover"
      ></video>

      <div className="z-[2] absolute top-0 left-0 w-full h-full flex-col justify-end hidden md:flex">
        <div className="container px-0">
          <div className="grid grid-cols-2">
            <div
              style={{
                background: "radial-gradient(circle,#000,transparent 70%)",
              }}
              className="pl-20 pt-[50px] pb-[150px] xl:pb-[180px] xl:pt-[170px]"
            >
              <h1 className="text-[32px] leading-[38px] lg:text-[42px] lg:leading-[50px] xl:text-[50px] xl:leading-[60px] text-white font-space-mono font-bold mb-5">
                <p>GAMEFI</p>
                <span>INVESTMENT</span>
                <span className="ml-3.5 xl:block">DAO</span>
              </h1>
              {/* text-[24px] leading-[32px] */}
              <p className="text-[16px] leading-[22px] text-white/80 font-dm-sans">
                Access to premium and exclusive <br /> GameFi deals via the
                Ethlizard DAO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
