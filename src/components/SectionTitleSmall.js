import React from "react";

const SectionTitleSmall = ({
  title,
  hideLeftIcon,
  hideRightIcon,
  className = "",
}) => {
  return (
    <h3 className={`title_sm mb-[15px] ${className}`}>
      {!hideLeftIcon && (
        <span className="mr-[17px] inline">
          <img
            src="/img/title_shape.png"
            className="inline"
            style={{
              transform: "rotateY(180deg)",
            }}
            alt="Shape"
          />
        </span>
      )}
      <span>{title}</span>
      {!hideRightIcon && (
        <span className="ml-[17px] inline">
          <img src="/img/title_shape.png" className="inline" alt="Shape" />
        </span>
      )}
    </h3>
  );
};

export default SectionTitleSmall;
