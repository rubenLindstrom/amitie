import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useAnimateIn } from "../hooks";

import { SocialLinks } from "./atoms";

const Nav = ({ invert }) => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [open]);

  const links = [
    { title: "Home", link: "/" },
    { title: "Gallery", link: "/gallery" },
    { title: "Story", link: "/story" },
    { title: "Visit", link: "/visit" }
  ];

  return (
    <>
      <nav
        className={`${open || invert ? "invert" : ""} ${useAnimateIn([
          "fadeIn"
        ])}`}
      >
        <Link to="/" onClick={closeMenu}>
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
          {links.map(({ title, link }) => (
            <li key={link}>
              <NavLink onClick={closeMenu} to={link} exact>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
