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

const HomeText = styled.p`
  font-weight: 300;
  font-size: 2rem;
  text-align: center;

  max-width: 80ch;

  padding: 5rem 8rem;

  margin-inline: auto;
  margin-block: 15vh;

  border: 2px solid ${({ theme }) => theme.color.highlight1};
  border-radius: 10px;
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
        <HomeText>
          Welcome to the Tandemly home page! Tandemly is currently being
          developed and new features will be released as soon as
          they&apos;re ready. Feel free to take a look around and check
          back regularly!
        </HomeText>
      </PageLayout>
    </div>
  );
};

export default Home;
