import React from "react";

import { PageTitle } from "../components/atoms";

import peas from "../images/gallery/peas.jpg";
import atTable from "../images/gallery/at table.jpg";
import bread from "../images/gallery/bread.jpg";
import cassoulette from "../images/gallery/cassoulette.jpg";
import rocksDrink from "../images/gallery/rocks drink.jpg";
import tasty from "../images/gallery/tasty.jpg";
import tomato from "../images/gallery/tomato.jpg";
import wine from "../images/gallery/wine.jpg";

const gallery = () => {
  return (
    <>
      <div className="gallery">
        <PageTitle>Gallery</PageTitle>
        <div className="image-grid">
          <div className="gallery-item">
            <img src={peas} alt="peas" />
            <div className="description">
              <p>Freshly harvested vegetables</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={atTable} alt="atTable" />
            <div className="description">
              <p>Seatings for up to 20 people</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={bread} alt="bread" />
            <div className="description">
              <p>Oven hot bread from the local boulangerie</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={rocksDrink} alt="rocksDrink" />
            <div className="description">
              <p>Exotic drinks like never before</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={tasty} alt="tasty" />
            <div className="description">
              <p>Local and foreign dishes</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={cassoulette} alt="cassoulette" />
            <div className="description">
              <p>Seasonal menu</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={tomato} alt="tomato" />
            <div className="description">
              <p>Brunch on Saturdays</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={wine} alt="wine" />
            <div className="description">
              <p>Carefully curated wine cellar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default gallery;
