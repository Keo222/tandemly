import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

// STYLED COMPONENTS
import { GreyBackground } from "../styles/styledComponents/BackgroundDiv";
const PageHeader = styled.h1`
  text-align: center;
`;

// const LinkContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   min-height: 50vh;
// `;

const LinkList = styled.div`
  height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledLink = styled.a`
  padding: 1rem 2rem;
  background-color: green;
  border: 2px solid green;
  border-radius: 10px;
  transition: all 0.3s;
  block-size: fit-content;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  margin: auto;

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
      <GreyBackground />
      <PageHeader>Tandemly</PageHeader>
      <LinkList>
        <Link href="/places">
          <StyledLink>Places</StyledLink>
        </Link>
        <Link href="/map">
          <StyledLink>Map</StyledLink>
        </Link>
        <Link href="/login">
          <StyledLink>Login</StyledLink>
        </Link>
        <Link href="/movies">
          <StyledLink>Movies</StyledLink>
        </Link>
      </LinkList>
    </div>
  );
};

export default Home;
