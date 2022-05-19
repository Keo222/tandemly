import React from "react";
import Map from "../components/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

type Props = {};

const test = (props: Props) => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
    <div>
      <Wrapper
        apiKey={"AIzaSyA6kQxCkEmVTSPq4I5sV7Vh7CsGfK9fSfo"}
        libraries={["places"]}
        render={render}
      >
        <Map />
      </Wrapper>
    </div>
  );
};

export default test;
