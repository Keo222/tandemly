import React from "react";
import { NextPage } from "next";

// Components
import { SmLinkButton } from "../../components/generic/Buttons";
import PlacesList from "../../components/placesPage/PlacesList";
import PageLayout from "components/layouts/PageLayout";

const Places: NextPage = () => {
  return (
    <PageLayout>
      <div className="px-16 pt-16 pb-8 w-full text-neutral-50 grid grid-cols-6 justify-center">
        <h1 className="m-auto text-6.5xl font-normal tracking-4 col-start-2 col-span-4">
          Places
        </h1>
        <SmLinkButton text="Add Place" url="/test" />
      </div>
      <PlacesList />
    </PageLayout>
  );
};

export default Places;
