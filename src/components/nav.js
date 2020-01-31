import React, { useState, useEffect, useLayoutEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { debounce } from "../helpers";

import { SocialLinks } from "./atoms";

const Nav = ({ invert }) => {
  const [hidden, setHidden] = useState(false);
  const [inPage, setInPage] = useState(false);
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [open]);

  useLayoutEffect(() => {
    let lastYPos = document.scrollingElement.scrollTop;
    window.addEventListener(
      "scroll",
      debounce(() => {
        const yPos = document.scrollingElement.scrollTop;
        if (yPos > lastYPos) setHidden(true);
        else {
          setHidden(false);
          if (yPos > 0) setInPage(true);
          else setInPage(false);
        }

        lastYPos = yPos;
      }, 250)
    );
  }, []);

  const links = [
    { title: "Home", link: "/" },
    { title: "Gallery", link: "/gallery" },
    { title: "Story", link: "/story" },
    { title: "Visit", link: "/visit" },
    { title: "Menu", link: "/menu" }
  ];

  return (
    <>
      <nav
        className={`${open ? "open " : ""}${invert ? "invert " : ""}${
          hidden && !open ? "scrolled " : ""
        }${inPage && !open ? "inPage" : ""}`}
      >
        <div className="inner-wrapper">
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
        </div>
        <div className={`nav-content ${open ? "open" : ""}`}>
          <ul>
            {links.map(({ title, link }, index) => (
              <li
                key={link}
                style={{ transitionDelay: `${0.1 + 0.2 * index}s` }}
              >
                <NavLink onClick={closeMenu} to={link} exact>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
