import React from "react";
import { Link } from "react-router-dom";
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
          <p className="italic">
            123 Main St Anytown — Seattle, WA — 206-555-7890
          </p>
        </div>
        <div className="bottom">
          <h2
            id="headerEat"
            className={index === 1 ? "active" : ""}
            onMouseEnter={() => onLabelHover(1)}
            onMouseLeave={resume}
          >
            <Link to="/menu">Eat</Link>
          </h2>
          <h2
            id="headerDrink"
            className={index === 2 ? "active" : ""}
            onMouseEnter={() => onLabelHover(2)}
            onMouseLeave={resume}
          >
            <Link to="/menu#drink">Drink</Link>
          </h2>
          <h2
            id="headerVisit"
            className={index === 3 ? "active" : ""}
            onMouseEnter={() => onLabelHover(3)}
            onMouseLeave={resume}
          >
            <Link to="/visit">Visit</Link>
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
