import React from "react";
import type { NextPage } from "next";
import Map from "../../components/pageSpecific/mapPage/Map";

// Layout
import PageLayout from "@/components/layouts/PageLayout";

const MapPage: NextPage = () => {
  return (
    <PageLayout>
      <Map />
    </PageLayout>
  );
};

export default MapPage;
