import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useAnimateIn } from "../hooks";

import { SocialLinks } from "./atoms";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={`${open ? "open" : ""} ${useAnimateIn(["fadeIn"])}`}>
        <Link to="/">
          <h1 className="logo">Amitié</h1>
        </Link>
        <div className="icons">
          <SocialLinks />
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
            <NavLink onClick={() => setOpen(false)} to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpen(false)} to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpen(false)} to="/story">
              Story
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setOpen(false)} to="/visit">
              Visit
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
