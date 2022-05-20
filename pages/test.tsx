import React from "react";
import type { NextPage } from "next";
import Map from "../components/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

type Props = {};

const Test: NextPage = (props: Props) => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  const apiKey = process.env.NEXT_PUBLIC_GMAPS_API_KEY;
  return (
    <div>
      <Wrapper
        apiKey={apiKey as string}
        libraries={["places"]}
        render={render}
      >
        <Map />
      </Wrapper>
    </div>
  );
};

export default Test;
