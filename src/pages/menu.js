import React from "react";

import food from "../model/food";

import snails from "../images/gallery/snails.jpg";
import dessert from "../images/gallery/dessert.jpg";

const menu = () => {
  const renderMenu = label =>
    Object.keys(food[label]).map(key => (
      <div key={key}>
        <p className="menu-rubric bold">
          {key[0].toUpperCase() + key.substring(1)}
        </p>
        {food[label][key].map(({ name, content, price }) => (
          <p className="menu-item" key={name}>
            — {name} —
            <br />
            {content}
            <br />
            <span className="menu-price">${price}</span>
          </p>
        ))}
      </div>
    ));

  return (
    <div className="menu padded center marginTop">
      {/* ENTRÉES */}
      <h2 className="course-header">— Entrées —</h2>
      <p className="smaller">
        Modern dishes that capture the flavours of the season
      </p>
      <div className="parallax" style={{ backgroundImage: `url(${snails})` }} />
      <br />
      {renderMenu("entrees")}
      {/* DESSERTS */}
      <h2 className="course-header">— Desserts —</h2>
      <p className="smaller">Handmade daily, exclusively in-house</p>
      <div
        className="parallax"
        style={{ backgroundImage: `url(${dessert})` }}
      />
      {renderMenu("desserts")}
      <button className="button-primary spaced">Make a reservation</button>
    </div>
  );
};

export default menu;
