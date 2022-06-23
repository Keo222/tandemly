import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { signOutUser } from "@/pages/login/_helperLogin";

// Styled Components
const LinkBtn = styled.a`
  padding: 1rem 2rem;
  border: 2px solid var(--color-highlight-1);
  border-radius: 5px;
  block-size: fit-content;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-highlight-1);
    color: #1c1c1c;
  }
`;

const StyledSignOut = styled(LinkBtn)`
  border: 2px solid var(--color-failure-red);
  color: var(--color-text-light);
  &:hover {
    background-color: var(--color-failure-red);
    color: var(--color-text-light);
  }
`;

type LinkBtnProps = {
  text: string;
  url: string;
};

export const NavLinkButton = ({ text, url }: LinkBtnProps) => {
  return (
    <Link href={url}>
      <LinkBtn>{text}</LinkBtn>
    </Link>
  );
};

type SignOutBtnProps = {
  text?: string;
};

export const SignOutButton = ({ text = "Sign Out" }: SignOutBtnProps) => {
  return (
    <StyledSignOut onClick={async () => await signOutUser()}>
      {text}
    </StyledSignOut>
  );
};
