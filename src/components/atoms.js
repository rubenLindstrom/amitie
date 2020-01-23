import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const SocialLinks = () => (
  <div className="social-links">
    <FontAwesomeIcon icon={faTwitter} className="social" />
    <FontAwesomeIcon icon={faInstagram} className="social" />
  </div>
);

export const Separator = () => <div className="separator"></div>;
