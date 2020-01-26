import React, { useState } from "react";

import food from "../model/food";
import drinks from "../model/drinks";

import { Separator } from "../components/atoms";
import MenuSwitch from "../components/menuSwitch";

const Menu = () => {
  // TODO: Get active state from URL
  const [mode, setMode] = useState("FOOD");
  const renderMenu = (group, { subtitle, bg, contents }) => (
    <div className="menu-category" key={group}>
      <h2 className="course-header big-header">— {group} —</h2>
      <p className="smaller">{subtitle}</p>
      <div className="parallax" style={{ backgroundImage: `url(${bg})` }} />
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
    <div className="menu padded center marginTop">
      <MenuSwitch mode={mode} setMode={setMode} />
      <div style={{ display: mode === "FOOD" ? "block" : "none" }}>
        {Object.keys(food).map(key => renderMenu(key, food[key]))}
      </div>
      <div style={{ display: mode === "DRINKS" ? "block" : "none" }}>
        {Object.keys(drinks).map(key => renderMenu(key, drinks[key]))}
      </div>
      <button className="button-primary spaced">Make a reservation</button>
      <Separator />
    </div>
  );
};

export default Menu;
