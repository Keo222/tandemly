import React from "react";
import styled from "styled-components";

// Layout
import PageLayout from "@/components/layouts/PageLayout";
// Components
import TMDBDisclosure from "../../components/moviesPage/TMDBDisclosure";
// StyledComponents
import { GreyBackground } from "../../styles/styledComponents/BackgroundDiv";

const MovieHeader = styled.h1`
  text-align: center;
`;

type Props = {};

const MovieList = (props: Props) => {
  return (
    <PageLayout>
      <GreyBackground />
      <MovieHeader>Movies</MovieHeader>
      <TMDBDisclosure />
    </PageLayout>
  );
};

export default MovieList;
