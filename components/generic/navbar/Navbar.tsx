import React from "react";
import Image from "next/image";
import styled from "styled-components";

// Images
import tandemlyLogo from "public/logos/tandem_bike.svg";

// Componenets
import { NavLinkButton } from "../buttons/LinkButtons";
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

type Props = {};

const Navbar = (props: Props) => {
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
        <NavLinkButton text="Login" url="/login" />
        <NavLinkButton text="Movies" url="/movies" />
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
