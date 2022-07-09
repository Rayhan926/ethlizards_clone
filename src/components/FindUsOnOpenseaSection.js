import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const nfts = [
  "/img/nft_1.png",
  "/img/nft_2.png",
  "/img/nft_3.png",
  "/img/nft_4.png",
  "/img/nft_5.png",
  "/img/nft_6.png",
  "/img/nft_7.png",
  "/img/nft_8.png",
];

const FindUsOnOpenseaSection = () => {
  return (
    <section>
      <div className="py-5 px-10 bg-white/5">
        <h3 className="title_sm text-center mt-[15px]">
          FIND US ON <span className="text-secondary">OPENSEA</span>
        </h3>
        <div>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
            }}
          >
            {nfts.map((nft, i) => (
              <SwiperSlide key={i}>
                <div className="py-10 cursor-pointer">
                  <img src={nft} alt="NFT" className="rounded-[10px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FindUsOnOpenseaSection;
