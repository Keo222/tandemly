import React from "react";
import Image from "next/image";
import Link from "next/link";
// Logo
import tandemlyLogo from "public/logos/tandem_bike.svg";
// Components
import { NavbarButton } from "./Buttons";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between w-5/6 mx-auto">
      <Link href="/">
        <a>
          <Image src={tandemlyLogo} alt="Tandemly Logo" />
        </a>
      </Link>
      <div className="flex flex-row justify-around gap-4">
        <NavbarButton text="Places" url="/places" />
        <NavbarButton text="Map" url="/map" />
        <NavbarButton text="Login" url="/login" />
        <NavbarButton text="Movies" url="/movies" />
      </div>
    </nav>
  );
};

export default Navbar;
