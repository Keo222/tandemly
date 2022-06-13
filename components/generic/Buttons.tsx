import React from "react";
import Link from "next/link";

// SMALL LINK BUTTON
type SmLinkButtonProps = {
  text: string;
  url: string;
};

export const SmLinkButton = ({ text, url }: SmLinkButtonProps) => {
  return (
    <Link href={url}>
      <a className="bg-green-700 hover:bg-transparent text-center h-fit w-fit px-6 py-3 rounded-lg border-2 border-green-700 m-auto transition-colors text-2xl">
        {text}
      </a>
    </Link>
  );
};

// REGULAR SIZED LINK BUTTON
type LinkButtonProps = {
  text: string;
  url: string;
};

export const LinkButton = ({ text, url }: LinkButtonProps) => {
  return (
    <Link href={url}>
      <a className="bg-green-700 hover:bg-transparent text-center h-fit w-fit px-6 py-3 rounded-lg border-2 border-green-700 m-auto transition-colors">
        {text}
      </a>
    </Link>
  );
};

// NAVBAR BUTTON

export const NavbarButton = ({ text, url }: LinkButtonProps) => {
  return (
    <Link href={url}>
      <a className="hover:bg-cyan-400 hover:bg-transparent text-center h-fit w-fit px-6 py-3 rounded-lg border-2 border-cyan-400 m-auto transition-colors text-2xl hover:text-gray-900">
        {text}
      </a>
    </Link>
  );
};
