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

      <div className="z-[2] absolute top-0 left-0 w-full h-full flex flex-col justify-end">
        <div className="container">
          <div className="grid grid-cols-2">
            <div
              style={{
                background: "radial-gradient(circle,#000,transparent 70%)",
              }}
              className="pl-20 pb-[180px] pt-[170px]"
            >
              <h1 className="text-[50px] leading-[60px] text-white font-space-mono font-bold">
                GAMEFI
                <p>INVESTMENT</p>
                <p>DAO</p>
              </h1>
              <p className="text-[24px] leading-[32px] text-white/80 font-dm-sans">
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
