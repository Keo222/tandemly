import React from "react";
import type { NextPage } from "next";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

type Props = {
  children: JSX.Element;
};

const GMapsAPIWrapper: NextPage<Props> = ({ children }) => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  const apiKey = process.env.NEXT_PUBLIC_GMAPS_API_KEY;
  return (
    <>
      <Wrapper apiKey={apiKey as string} libraries={["places"]} render={render}>
        {children}
      </Wrapper>
    </>
  );
};

export default GMapsAPIWrapper;
