import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { firebaseAuth } from "../../../firebase/firebaseConfig";

// Images
import tandemlyLogo from "public/logos/tandem_bike.svg";

// Componenets
import { NavLinkButton, SignOutButton } from "../buttons/LinkButtons";
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

type Props = {};

const Navbar = (props: Props) => {
  const user = firebaseAuth.currentUser;
  console.log(user);
  return (
    <Nav>
      <Link href="/">
        <a>
          <Image src={tandemlyLogo} alt="Tandemly logo" />
        </a>
      </Link>
      <NavLinks>
        <NavLinkButton text="Places" url="/places" />
        <NavLinkButton text="Map" url="/map" />
        <NavLinkButton text="Movies" url="/movies" />
        {!user && <NavLinkButton text="Login" url="/login" />}
        {user && <SignOutButton />}

        {user && <WelcomeMsg>Welcome!</WelcomeMsg>}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
