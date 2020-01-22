import React, { useState } from "react";

const Hero = () => {
  const [activeBg, setActiveBg] = useState(0);
  return (
    <div className="hero">
      <div className="inner-wrapper">
        <div className="top">
          <p>123 Fake Street — Seattle, WA — 206-555-7890</p>
        </div>
        <div className="bottom">
          <h2
            id="headerEat"
            onMouseEnter={() => setActiveBg(1)}
            onMouseLeave={() => setActiveBg(0)}
          >
            Eat
          </h2>
          <h2
            id="headerDrink"
            onMouseEnter={() => setActiveBg(2)}
            onMouseLeave={() => setActiveBg(0)}
          >
            Drink
          </h2>
          <h2
            id="headerVisit"
            onMouseEnter={() => setActiveBg(3)}
            onMouseLeave={() => setActiveBg(0)}
          >
            Visit
          </h2>
        </div>
      </div>
      <div
        className={`onHover-bg ${activeBg === 1 ? "active" : ""}`}
        id="bgEat"
      ></div>
      <div
        className={`onHover-bg ${activeBg === 2 ? "active" : ""}`}
        id="bgDrink"
      ></div>
      <div
        className={`onHover-bg ${activeBg === 3 ? "active" : ""}`}
        id="bgVisit"
      ></div>
    </div>
  );
};

export default Hero;
