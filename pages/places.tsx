import React from "react";
import { NextPage } from "next";

// Components
import PlacesList from "../components/places/PlacesList";

type Props = {};

const Places: NextPage = (props: Props) => {
  return (
    <div>
      <PlacesList />
    </div>
  );
};

export default Places;
