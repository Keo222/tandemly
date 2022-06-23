import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

// Layout
import PageLayout from "@/components/layouts/PageLayout";
// Components
import TMDBDisclosure from "../../components/pageSpecific/moviesPage/TMDBDisclosure";
// StyledComponents
import { GreyBackground } from "../../styles/styledComponents/BackgroundDiv";

const MovieHeader = styled.h1`
  text-align: center;
`;

type Props = {};

const MoviePage: NextPage = (props: Props) => {
  return (
    <PageLayout>
      <GreyBackground />
      <MovieHeader>Movies</MovieHeader>
      <TMDBDisclosure />
    </PageLayout>
  );
};

export default MoviePage;
