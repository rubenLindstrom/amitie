import React from "react";

const staff = [
  {
    image: require("../images/chef1.jpg"),
    name: "Jeff Bonstar",
    title: "Head Chef"
  },
  {
    image: require("../images/chef2.jpg"),
    name: "Mia Chun",
    title: "Assistant Chef"
  },
  {
    image: require("../images/chef3.jpg"),
    name: "Pierre Fidier",
    title: "Customer Experience"
  },
  {
    image: require("../images/chef4.jpg"),
    name: "Paul Ramsey",
    title: "Reservations and menu"
  },
  {
    image: require("../images/chef5.jpg"),
    name: "Bebb",
    title: "Very temporary intern"
  }
];

const story = () => {
  return (
    <div id="story">
      <div className="fullscreen story-landing shaded-light">
        <div className="inner-wrapper">
          <h1 className="page-title">— Story —</h1>
          <p>↓</p>
        </div>
      </div>
      <div className="content">
        <h2 className="subtitle">Innovating for a global palate since 1987</h2>
        <p className="">
          Welcome to the Tremont Template. To get started, watch these short
          videos on Squarespace basics and read the template guide. This Text
          Block is perfect for generating visitor interest by going into more
          detail about yourself, your project, or company. You can talk about
          how your idea started, how long you’ve been working on it and why it’s
          important. The more specific you are, the more visitors can engage
          with what you do.
        </p>
        <p>
          You can also use this space to answer any questions your visitors may
          have about you or your work. To get them interested in clicking the
          Button Block below, you can talk about your creative process, what
          sets your idea apart, and how happy you are to share it. Learn more
          about blocks here. Also, be sure to edit the button’s URL so it links
          to a page on your site.
        </p>
        <h2 className="subtitle">The staff</h2>
      </div>
      {staff.map(({ image, name, title }) => (
        <div className="staffMember">
          <div className="image-wrapper">
            <img src={image} alt={`${name} portrait`} />
          </div>
          <p className="staffName">{name}</p>
          <p className="staffTitle">{title}</p>
        </div>
      ))}
    </div>
  );
};

export default story;
