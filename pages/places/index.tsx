import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

// Components
import PlacesList from "../../components/places/PlacesList";

// Styled Components
const TopBar = styled.div`
  padding: 4rem 4rem 2rem;
  width: 100%;
  display: flex;
  color: var(--color-text-light);
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

type Props = {};

const Places: NextPage = (props: Props) => {
  return (
    <>
      <TopBar>
        <TitleHeader>Places</TitleHeader>
        <Link href="/test">
          <AddPlaceBtn>Add Place</AddPlaceBtn>
        </Link>
      </TopBar>
      <PlacesList />
    </>
  );
};

export default Places;
