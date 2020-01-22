import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Logo from "../images/logo.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={open ? "open" : ""}>
        <Link to="/">
          <h1 className="logo">Amitié</h1>
        </Link>
        <div class="icons">
          <FontAwesomeIcon icon={faTwitter} className="social" />
          <FontAwesomeIcon icon={faInstagram} className="social" />
          <FontAwesomeIcon
            icon={open ? faTimes : faBars}
            id="hamburger"
            onClick={() => setOpen(prevState => !prevState)}
          />
        </div>
      </nav>
      <div className={`nav-content ${open ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/story">Story</NavLink>
          </li>
          <li>
            <NavLink to="/visit">Visit</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
