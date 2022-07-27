import React, { useContext } from "react";
import Image from "next/image";
import styled from "styled-components";

// Context
import { AuthContext } from "context/authContext";

// Images
import { tandemlyLogo } from "images/logos";

// Componenets
import { LinkButton, SignOutButton } from "@/components/generic/buttons/";
import Link from "next/link";

// Styled Components
const Nav = styled.nav`
  width: 80%;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`;

const LogoAndHeaderLink = styled.a`
  display: flex;
  justify-content: center;
`;

const NavHeader = styled.p`
  display: inline-block;
  padding-left: 3rem;
  font-size: 4rem;
  margin-block: 3rem;
`;

const WelcomeMsg = styled.h5``;

const Navbar = () => {
  const loggedIn = useContext(AuthContext);
  return (
    <Nav>
      <Link href="/">
        <LogoAndHeaderLink>
          <Image src={tandemlyLogo} alt="Tandemly logo" />
          <NavHeader>Tandemly</NavHeader>
        </LogoAndHeaderLink>
      </Link>
      <NavLinks>
        <LinkButton text="Places" url="/places" />
        <LinkButton text="Map" url="/map" />
        <LinkButton text="Movies" url="/movies" />
        {loggedIn ? (
          <>
            <SignOutButton />
            <WelcomeMsg>Welcome!</WelcomeMsg>
          </>
        ) : (
          <LinkButton text="Login" url="/login" />
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
