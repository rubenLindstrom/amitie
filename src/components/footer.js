import React from "react";

import { SocialLinks } from "./atoms";

const footer = () => {
  return (
    <footer>
      <div className="inner-block">
        <p className="rubric">Contact</p>
        <p>206-555-7890</p>
        <p>123 Fake Street</p>
        <p>Seattle, WA 00000</p>
        <p>example@example.com</p>
      </div>
      <h2>— Amitié —</h2>
      <SocialLinks />
      <div className="inner-block">
        <p className="rubric">Hours</p>
        <p>Mon–Wed 6–11</p>
        <p>Thu–Sat 4–12</p>
        <p>Sun 3–10</p>
      </div>
      <p>
        This website was crafted with love by{" "}
        <a href="https://littlweb.netlify.com" target="_blank">
          littleweb
        </a>
      </p>
    </footer>
  );
};

export default footer;
