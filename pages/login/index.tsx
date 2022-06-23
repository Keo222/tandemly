import React from "react";
import type { NextPage } from "next";

// Layout
import PageLayout from "@/components/layouts/PageLayout";

// Components
import LoginForm from "@/components/pageSpecific/loginPage/LoginForm";

type Props = {};

const LoginPage: NextPage = (props: Props) => {
  return (
    <PageLayout>
      <LoginForm />
    </PageLayout>
  );
};

export default LoginPage;
