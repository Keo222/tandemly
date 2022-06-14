import React from "react";
import type { NextPage } from "next";
import Map from "../../components/mapPage/Map";

// Layout
import PageLayout from "@/components/layouts/PageLayout";

const Test: NextPage = () => {
  return (
    <PageLayout>
      <Map />
    </PageLayout>
  );
};

export default Test;
