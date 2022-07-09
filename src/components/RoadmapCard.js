import React from "react";
import { BiCheck } from "react-icons/bi";

const RoadmapCard = ({ date, description, title, isDone, isLeft }) => {
  return (
    <div
      className={`${
        isLeft
          ? "mt-20 md:mt-[100px] pl-[30px]"
          : "pr-[30px] mt-20 first:mt-0 md:mt-0"
      }`}
    >
      <div className="px-10 py-[30px] bg-white/5 pt-[30px] relative">
        <div
          className={`absolute w-[30px] h-[30px] bg-white/5 bottom-full ${
            isLeft ? "right-full" : "left-full"
          }`}
        ></div>
        <h3 className="flex justify-between items-center mb-[15px]">
          <span className="title_md">{date}</span>
          {isDone ? (
            <BiCheck color="#00FFA3" size={23} />
          ) : (
            <img src="/img/spinner.png" alt="spinner" />
          )}
        </h3>

        <h5 className="title_md text-white/80 font-dm-sans">{title}</h5>
        <p className="body_text">{description}</p>
      </div>
    </div>
  );
};

export default RoadmapCard;
