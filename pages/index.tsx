import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

// STYLED COMPONENTS
const PageHeader = styled.h1`
  text-align: center;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 50vh;
`;

const LinkList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled.a`
  padding: 1rem 2rem;
  background-color: green;
  border: 2px solid green;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: green;
    background-color: #efefef;
  }
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
      <PageHeader>Tandemly</PageHeader>
      <LinkContainer>
        <LinkList>
          <Link href="/places">
            <StyledLink>Places</StyledLink>
          </Link>
          <Link href="/test">
            <StyledLink>Test</StyledLink>
          </Link>
          <Link href="/login">
            <StyledLink>Login</StyledLink>
          </Link>
        </LinkList>
      </LinkContainer>
    </div>
  );
};

export default Home;
