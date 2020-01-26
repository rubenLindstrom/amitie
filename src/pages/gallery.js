import React from "react";

import { PageTitle } from "../components/atoms";
import Footer from "../components/footer";

import peas from "../images/gallery/peas.jpg";
import atTable from "../images/gallery/at table.jpg";
import bread from "../images/gallery/bread.jpg";
import cassoulette from "../images/gallery/cassoulette.jpg";
import rocksDrink from "../images/gallery/rocks drink.jpg";
import snails from "../images/gallery/snails.jpg";
import tasty from "../images/gallery/tasty.jpg";
import tomato from "../images/gallery/tomato.jpg";
import wine from "../images/gallery/wine.jpg";

const gallery = () => {
  return (
    <>
      <div className="gallery">
        <PageTitle>Gallery</PageTitle>
        <div className="image-grid">
          <img src={peas} alt="peas" />
          <img src={atTable} alt="atTable" />
          <img src={bread} alt="bread" />
          <img src={cassoulette} alt="cassoulette" />
          <img src={rocksDrink} alt="rocksDrink" />
          <img src={snails} alt="snails" />
          <img src={wine} alt="wine" />
          <img src={tasty} alt="tasty" />
          <img src={tomato} alt="tomato" />
        </div>
      </div>
    </>
  );
};

export default gallery;
