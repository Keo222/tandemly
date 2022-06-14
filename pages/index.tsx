import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

// Layout
import PageLayout from "@/components/layouts/PageLayout";

// STYLED COMPONENTS
import { GreyBackground } from "../styles/styledComponents/BackgroundDiv";
const PageHeader = styled.h1`
  text-align: center;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tandemly</title>
        <meta
          name="description"
          content="Tandemly is a shared space for you and your partner to come up with, share, and remember fun date ideas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <GreyBackground />
        <PageHeader>Tandemly</PageHeader>
      </PageLayout>
    </div>
  );
};

export default Home;
