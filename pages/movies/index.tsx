import React from "react";
import styled from "styled-components";

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
    <div>
      <GreyBackground />
      <MovieHeader>Movies</MovieHeader>
      <TMDBDisclosure />
    </div>
  );
};

export default MovieList;
