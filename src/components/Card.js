import React from "react";
import { BsTwitter } from "react-icons/bs";

const Card = ({ imgSrc, name, title, twitter }) => {
  return (
    <div className="p-5 pt-[35px] bg-dark group rounded-[10px]">
      <a
        href={twitter || "#"}
        rel="noreferrer"
        target={"_blank"}
        className="w-[160px] h-[160px] block rounded-full overflow-hidden mx-auto hover:opacity-80"
      >
        <img src={imgSrc} alt={name} className="w-full h-auto" />
      </a>
      <h3 className="mt-7 mb-1.5 text-secondary text-center title_md font-bold">
        {name}
      </h3>
      <p className="body_text text-center leading-[19px]">{title}</p>
      <div className="flex justify-center mt-2.5 opacity-0 group-hover:opacity-100 duration-300">
        <a
          href={twitter || "#"}
          rel="noreferrer"
          target={"_blank"}
          className="text-white hover:opacity-80"
        >
          <BsTwitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Card;
