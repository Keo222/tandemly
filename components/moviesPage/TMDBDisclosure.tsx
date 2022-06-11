import React from "react";
import styled from "styled-components";

// Styled Components
const Disclosure = styled.p`
  text-align: center;
`;

type Props = {};

const TMDBDisclosure = (props: Props) => {
  return (
    <>
      <Disclosure>
        This product uses the TMDB API but is not endorsed or certified by
        TMDB.
      </Disclosure>
    </>
  );
};

export default TMDBDisclosure;
