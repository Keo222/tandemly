import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

// Layout
import PageLayout from "@/components/layouts/PageLayout";
// Components
import TMDBDisclosure from "../../components/pageSpecific/moviesPage/TMDBDisclosure";

const MovieHeader = styled.h1`
  text-align: center;
`;

type Props = {};

const MoviePage: NextPage = (props: Props) => {
  return (
    <PageLayout>
      <MovieHeader>Movies</MovieHeader>
      <TMDBDisclosure />
    </PageLayout>
  );
};

export default MoviePage;
