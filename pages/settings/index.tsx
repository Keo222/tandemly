import PageLayout from "@/components/layouts/PageLayout";
import { firebaseAuth } from "@/firebase/firebaseConfig";
import { NextPage } from "next";
import React from "react";

type Props = {};

const SettingsPage: NextPage = (props: Props) => {
  console.log(firebaseAuth.currentUser);
  return (
    <PageLayout>
      <h2>Settings page!</h2>
    </PageLayout>
  );
};

export default SettingsPage;
