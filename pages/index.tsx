import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

// COMPONENTS
import { LinkButton } from "../components/generic/Buttons";

// STYLED COMPONENTS
import { GreyBackground } from "../styles/styledComponents/BackgroundDiv";

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
  /* block-size: fit-content; */
  cursor: pointer;
  /* width: fit-content;
  height: fit-content; */
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
      <h1 className="text-center">Tandemly</h1>
      <LinkList>
        <LinkButton text="Places" url="/places" />
        <LinkButton text="Map" url="/map" />
        <LinkButton text="Login" url="/login" />
        <LinkButton text="Movies" url="/movies" />
      </LinkList>
    </div>
  );
};

export default Home;
