import React, { useState, useEffect } from "react";

import food from "../model/food";
import drinks from "../model/drinks";

import { Separator, Parallax } from "../components/atoms";
import MenuSwitch from "../components/menuSwitch";

const Menu = () => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    if (window.location.hash && window.location.hash.substr(1) === "drink")
      setMode("DRINKS");
    else setMode("FOOD");
  }, []);

  const renderMenu = (group, { subtitle, bg, contents }) => (
    <div className="menu-category" key={group}>
      <h2 className="course-header big-header">— {group} —</h2>
      <p className="smaller">{subtitle}</p>
      <Parallax bg={bg} />
      <div className="menu-group">
        {console.log(contents)}
        {Object.keys(contents).map(category => (
          <div key={category}>
            <p className="menu-rubric bold">{category}</p>
            {contents[category].map(({ name, content, price }) => (
              <p className="menu-item" key={name}>
                — {name} —
                <br />
                {content}
                <br />
                <span className="menu-price">${price}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="menu marginTop">
      <MenuSwitch mode={mode} setMode={setMode} />
      <div className="padded center">
        <div style={{ display: mode === "FOOD" ? "block" : "none" }}>
          {Object.keys(food).map(key => renderMenu(key, food[key]))}
        </div>
        <div style={{ display: mode === "DRINKS" ? "block" : "none" }}>
          {Object.keys(drinks).map(key => renderMenu(key, drinks[key]))}
        </div>
        <a href="https://www.opentable.com/" target="_blank" rel="noopener noreferrer">
        <button className="button-primary spaced">Make a reservation</button>
        </a>
        <Separator />
      </div>
    </div>
  );
};

export default Menu;
