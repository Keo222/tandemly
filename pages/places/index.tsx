import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

// Components
import PlacesList from "../../components/pageSpecific/placesPage/PlacesList";
// Layout
import PageLayout from "@/components/layouts/PageLayout";

// Styled Components
const TopBar = styled.div`
  padding: 4rem 4rem 2rem;
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.color.textLight};
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

const LinkBtn = styled.a`
  padding: 1rem 2rem;
  border: 2px solid ${({ theme }) => theme.color.highlight1};
  border-radius: 5px;
  block-size: fit-content;
  max-width: fit-content;
  transition: all 0.2s;
  justify-self: flex-end;
  background-color: ${({ theme }) => theme.color.highlight1};
  color: #1c1c1c;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.color.textLight};
  }
`;

const PlacesPage: NextPage = () => {
  return (
    <PageLayout>
      <TopBar>
        <TitleHeader>Places</TitleHeader>
        <Link href="/map">
          <LinkBtn>Add Place</LinkBtn>
        </Link>
      </TopBar>
      <PlacesList />
    </PageLayout>
  );
};

export default PlacesPage;
