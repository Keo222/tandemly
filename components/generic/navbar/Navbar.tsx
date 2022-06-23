import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { firebaseAuth } from "../../../firebase/firebaseConfig";

// Images
import tandemlyLogo from "public/logos/tandem_bike.svg";

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
        {firebaseAuth.currentUser ? (
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
