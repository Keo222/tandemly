import React from "react";
import type { NextPage } from "next";

// Layout
import PageLayout from "@/components/layouts/PageLayout";

// Components
import LoginForm from "@/components/pageSpecific/loginPage/LoginForm";
import Head from "next/head";

type Props = {};

const LoginPage: NextPage = (props: Props) => {
  return (
    <PageLayout>
      <Head>
        <title>Tandemly | Log In</title>
      </Head>
      <LoginForm />
    </PageLayout>
  );
};

export default LoginPage;
