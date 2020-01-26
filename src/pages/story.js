import React from "react";

import { PageTitle, Separator } from "../components/atoms";
import Footer from "../components/footer";

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
            Welcome to the Tremont Template. To get started, watch these short
            videos on Squarespace basics and read the template guide. This Text
            Block is perfect for generating visitor interest by going into more
            detail about yourself, your project, or company. You can talk about
            how your idea started, how long you’ve been working on it and why
            it’s important. The more specific you are, the more visitors can
            engage with what you do.
          </p>
          <p>
            You can also use this space to answer any questions your visitors
            may have about you or your work. To get them interested in clicking
            the Button Block below, you can talk about your creative process,
            what sets your idea apart, and how happy you are to share it. Learn
            more about blocks here. Also, be sure to edit the button’s URL so it
            links to a page on your site.
          </p>
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
        <button className="button-primary spaced">Dine with us</button>
      </div>
      <Separator />
    </>
  );
};

export default story;
