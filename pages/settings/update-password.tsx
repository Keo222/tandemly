import PageLayout from "@/components/layouts/PageLayout";
import { NextPage } from "next";
import React from "react";
import UpdatePasswordForm from "@/components/pageSpecific/loginPage/UpdatePasswordForm";

// Layout

type Props = {};

const updatePassword: NextPage = (props: Props) => {
  return (
    <PageLayout>
      <UpdatePasswordForm />
    </PageLayout>
  );
};

export default updatePassword;
