import PageLayout from "@/components/layouts/PageLayout";
import SignUpForm from "@/components/pageSpecific/loginPage/SignUpForm";
import { NextPage } from "next";
import React from "react";

type Props = {};

const SignUpPage: NextPage = (props: Props) => {
  return (
    <PageLayout>
      <SignUpForm />
    </PageLayout>
  );
};

export default SignUpPage;
