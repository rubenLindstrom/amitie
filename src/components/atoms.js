import React from "react";
import styled from "styled-components";

import { useAnimateIn } from "../hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const SocialLinks = () => (
  <div className="social-links">
    <FontAwesomeIcon icon={faTwitter} className="social" />
    <FontAwesomeIcon icon={faInstagram} className="social" />
  </div>
);

export const Separator = styled.div`
  border: 0.5px solid #ddd;
  margin: 8rem auto;
  width: 70%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  top: 20%;
  height: 10em;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);

  h1 {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.9);
  }

  p {
    text-align: center;
    font-size: 45px;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const PageTitle = ({ children }) => (
  <TitleWrapper className={`fadeIn ${useAnimateIn(["fadeIn"])}`}>
    <h1>— {children} —</h1>
    <p>↓</p>
  </TitleWrapper>
);
