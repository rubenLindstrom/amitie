import React from "react";
import { Link } from "react-router-dom";

import { PageTitle, Separator } from "../components/atoms";

import staff from "../model/staff";

const story = () => {
  return (
    <>
      <div id="story">
        <div className="fullscreen story-landing shaded-light">
          <PageTitle>Story</PageTitle>
        </div>
        <div className="content padded">
          <h2 className="subtitle">
            Innovating for a global palate since 1987
          </h2>
          <p className="">
            Welcome to Amitié. We're a multicultural hotspot for food cultures
            from all around the world. We cater to those who are willing to pay
            that little extra for an extraordinary night. 
          </p>
          <p>
            It all started with Remi Fidier, our founder. He had always had a
            passion for food, but felt that no restaurant in his home town
            were able to cater to his requirements. Without any money to start
            a restaurant he had to find funding amongst his near and dear.
            Through the support of his family, he had a humble beginning as a
            nische one man show kind of restaurant. The word soon spread, and
            that was the start of the now world renowned Amitié.
          </p>
          <p>Come dine with us, and be a part of food history!</p>
          <h2 className="subtitle">The staff</h2>
        </div>
        <div className="staff">
          {staff.map(({ image, name, title }) => (
            <div className="staffMember" key={name}>
              <div className="image-wrapper">
                <img src={image} alt={`${name} portrait`} />
              </div>
              <p className="staffName">{name}</p>
              <p className="staffTitle">{title}</p>
            </div>
          ))}
        </div>
        <Link to="/visit">
          <button className="button-primary spaced">Dine with us</button>
        </Link>
      </div>
      <Separator />
    </>
  );
};

export default story;
