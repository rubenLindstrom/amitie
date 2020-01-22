import React from "react";
import { useAnimateIn, useSlideshow } from "../hooks";

const Hero = () => {
  const { index, setIndex, resume, pause } = useSlideshow(4, 5000);

  const onLabelHover = index => {
    setIndex(index);
    pause();
  };

  return (
    <div className="hero fullscreen shaded">
      <div className={`inner-wrapper ${useAnimateIn(["slideUp", "fadeIn"])}`}>
        <div className="top">
          <p>123 Fake Street — Seattle, WA — 206-555-7890</p>
        </div>
        <div className="bottom">
          <h2
            id="headerEat"
            onMouseEnter={() => onLabelHover(1)}
            onMouseLeave={resume}
          >
            Eat
          </h2>
          <h2
            id="headerDrink"
            onMouseEnter={() => onLabelHover(2)}
            onMouseLeave={resume}
          >
            Drink
          </h2>
          <h2
            id="headerVisit"
            onMouseEnter={() => onLabelHover(3)}
            onMouseLeave={resume}
          >
            Visit
          </h2>
        </div>
      </div>
      <div
        className={`onHover-bg shaded ${index === 1 ? "active" : ""}`}
        id="bgEat"
      ></div>
      <div
        className={`onHover-bg shaded ${index === 2 ? "active" : ""}`}
        id="bgDrink"
      ></div>
      <div
        className={`onHover-bg shaded ${index === 3 ? "active" : ""}`}
        id="bgVisit"
      ></div>
    </div>
  );
};

export default Hero;
