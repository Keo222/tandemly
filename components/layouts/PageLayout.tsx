import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { GreyBackground } from "../../styles/styledComponents/BackgroundDiv";

const TopBar = styled.nav`
  padding: 4rem 4rem 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
`;

const TitleHeader = styled.h1`
  margin: auto;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 0.4em;
  grid-column: 2;
`;

const AddPlaceBtn = styled.a`
  margin-block: auto;
  margin-left: auto;
  padding: 0.8rem 1.6rem;
  border-radius: 15px;
  background-color: var(--color-success-green);

  color: var(--color-text-dark);
  font-size: 1.6rem;
  font-weight: 500;
`;

type Props = {
  title: string;
  btnDestination: "" | "map" | "places" | "movies";
  children: JSX.Element;
};

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <GreyBackground />
      <TopBar>
        <TitleHeader>{title}</TitleHeader>
      </TopBar>
      {children}
    </>
  );
};

export default Layout;
