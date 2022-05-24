import React from "react";
import type { NextPage } from "next";
import Map from "../components/Map";
import styled from "styled-components";

const DarkText = styled.div`
  color: #000;
`;

type Props = {};

const Test: NextPage = () => {
  return (
    <DarkText>
      <Map />
    </DarkText>
  );
};

export default Test;
