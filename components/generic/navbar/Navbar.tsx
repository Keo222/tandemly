import React, { useContext } from "react";
import Image from "next/image";
import styled from "styled-components";

// Context
import { AuthContext } from "context/authContext";

// Images
import { tandemlyLogo } from "images/logos";

// Componenets
import { LinkButton, SignOutButton } from "../buttons/LinkButtons";
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

const WelcomeMsg = styled.h5``;

const Navbar = () => {
  const loggedIn = useContext(AuthContext);
  return (
    <Nav>
      <Link href="/">
        <a>
          <Image src={tandemlyLogo} alt="Tandemly logo" />
        </a>
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
