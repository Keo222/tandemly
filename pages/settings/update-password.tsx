import PageLayout from "@/components/layouts/PageLayout";
import { NextPage } from "next";
import React from "react";

// Layout

type Props = {};

const updatePassword: NextPage = (props: Props) => {
  return (
    <PageLayout>
      <h2>update password!</h2>
    </PageLayout>
  );
};

export default updatePassword;
