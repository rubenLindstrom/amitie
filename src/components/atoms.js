import React from "react";
import styled from "styled-components";

import { useAnimateIn } from "../hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialLink = styled.a`
  transition: color 0.25s ease;
  margin: 0 0.5rem;

  &:hover {
    color: #fff;
  }
`;

export const SocialLinks = () => (
  <div>
    <SocialLink
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <FontAwesomeIcon icon={faTwitter} className="social" />
    </SocialLink>
    <SocialLink
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <FontAwesomeIcon icon={faInstagram} className="social" />
    </SocialLink>
  </div>
);

export const Separator = styled.div`
  border: 0.5px solid #ddd;
  margin: 8rem auto;
  width: 70%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  top: 140px;
  height: 10em;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: opacity 1s ease, transform 1.5s ease;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;

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

const ParallaxBase = styled.div`
  height: 150px;
  position: relative;
  &::before {
    background-image: url(${props => props.bg});
    background-position: 50%, 50%;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    will-change: transform;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
`;

export const Parallax = ({ bg, height }) => (
  <ParallaxBase bg={bg} height={height} />
);
