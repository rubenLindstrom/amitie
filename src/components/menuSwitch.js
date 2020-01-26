import React, { useState } from "react";
import styled from "styled-components";

import pasta from "../images/gallery/pasta.jpg";
import drink from "../images/gallery/drink2.jpg";

const Outer = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  width: min-content;
  margin: auto;
`;

const Box = styled.div`
  height: 250px;
  width: 500px;
  background-image: url(${props => (props.food ? pasta : drink)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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

const MenuSwitch = props => {
  const [mode, setMode] = useState(props.mode);

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
