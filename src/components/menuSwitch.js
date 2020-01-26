import React, { useState } from "react";
import styled from "styled-components";

import pasta from "../images/gallery/pasta.jpg";
import drink from "../images/gallery/drink2.jpg";

const Outer = styled.div`
  display: flex;
  background-color: #fff;
  overflow: hidden;
  width: 100%;
`;

const Box = styled.div`
  flex-grow: 1;
  height: 125px;
  background: url(${props => (props.food ? pasta : drink)}) no-repeat center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  h2 {
    font-size: 4rem;
    position: relative;
    z-index: ${props => (props.active ? 2 : 0)};

    &::after {
      position: absolute;
      top: 140%;
      content: "";
      height: 3px;
      left: ${props =>
        props.food || (!props.food && props.active) ? 0 : "100%"};
      right: ${props => (props.food && !props.active ? "100%" : 0)};
      background-color: #fff;
      transition: left 0.4s ease, right 0.4s ease;
      transition-delay: 0.1s;
    }
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    content: "";
    z-index: 1;
    transition: background-color 0.4s ease;
    background-color: ${props => `rgba(0,0,0,${props.active ? 0.2 : 0.5})`};
  }
`;

// TODO: Responsiveness
const MenuSwitch = ({ mode, setMode }) => {
  return (
    <Outer>
      <Box onClick={() => setMode("FOOD")} food active={mode === "FOOD"}>
        <h2>Food</h2>
      </Box>
      <Box onClick={() => setMode("DRINKS")} drink active={mode === "DRINKS"}>
        <h2>Drinks</h2>
      </Box>
    </Outer>
  );
};

export default MenuSwitch;
