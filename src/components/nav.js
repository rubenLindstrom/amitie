import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../images/logo.png";

const nav = () => (
  <nav>
    <div class="logo-wrapper">
      <img src={Logo} alt="Amité logo" />
    </div>
    <div class="icons">
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faBars} />
    </div>
  </nav>
);

export default nav;
