import React from "react";
import { Link } from "react-router-dom";

import { SocialLinks } from "./atoms";

const footer = () => {
  return (
    <footer>
      <div className="inner-wrapper">
        <div className="inner-block">
          <p className="rubric">Contact</p>
          <p>206-555-7890</p>
          <p>123 Main St Anytown</p>
          <p>Seattle, WA 00000</p>
          <p>hello@amitie.com</p>
        </div>
        <div className="middle">
          <Link to="/">
            <h2>— Amitié —</h2>
          </Link>
          <SocialLinks />
        </div>
        <div className="inner-block">
          <p className="rubric">Hours</p>
          <p>Mon–Wed 6–11</p>
          <p>Thu–Sat 4–12</p>
          <p>Sun 3–10</p>
        </div>
      </div>
      <p className="credit">
        This website was crafted with love by{" "}
        <a
          href="https://littlweb.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          littleweb
        </a>
      </p>
    </footer>
  );
};

export default footer;
