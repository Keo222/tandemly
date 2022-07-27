import React from "react";
import type { NextPage } from "next";
import Map from "../../components/pageSpecific/mapPage/Map";

// Layout
import PageLayout from "@/components/layouts/PageLayout";
import Head from "next/head";

const MapPage: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Tandemly | Map</title>
      </Head>
      <Map />
    </PageLayout>
  );
};

export default MapPage;
