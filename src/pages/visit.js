import React from "react";
import { Link } from "react-router-dom";

import wine from "../images/gallery/wine.jpg";

const visit = () => {
  return (
    <div className="visit padded center marginTop">
      <h2>— Make a reservation —</h2>
      <p>
        Place your booking 24 hours before your visit to be guaranteed a seat.
        Bookings can be canceled up to two hours before the alloted time slot.
        If you have any special seating preferences, please do not hestitate to
        contact us
      </p>
      <button className="button-primary spaced">
        <a
          target="_blank"
          href="http://www.opentable.com/rest_profile.aspx?rid=1000&restref=1000"
        >
          Find a table
        </a>
      </button>
      <div
        className="parallax"
        style={{ backgroundImage: `url(${wine})` }}
      ></div>
      <p className="small">
        Upon your reservation you have the option of adding wine testing. For a
        small exta fee, our own somilier will guide you through the wines of all
        continents, and make your visit extra memorable.
      </p>
      <Link to="/menu">
        <button className="button-primary inverted spaced">View menu</button>
      </Link>
    </div>
  );
};

export default visit;
