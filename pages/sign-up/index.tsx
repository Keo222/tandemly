import PageLayout from "@/components/layouts/PageLayout";
import SignUpForm from "@/components/pageSpecific/loginPage/SignUpForm";
import { NextPage } from "next";
import Head from "next/head";

type Props = {};

const SignUpPage: NextPage = (props: Props) => {
  return (
    <PageLayout>
      <Head>
        <title>Tandemly | Sign-Up</title>
      </Head>
      <SignUpForm />
    </PageLayout>
  );
};

export default SignUpPage;
