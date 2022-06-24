import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { signOutUser } from "../../../functions/userInfoFuncs";
import { useRouter } from "next/router";

// Styled Components
const LinkBtn = styled.a`
  padding: 1rem 2rem;
  border: 2px solid ${({ theme }) => theme.color.highlight1};
  border-radius: 5px;
  block-size: fit-content;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.highlight1};
    color: #1c1c1c;
  }
`;

const StyledSignOut = styled(LinkBtn)`
  border: 2px solid ${({ theme }) => theme.color.failureRed};
  color: var(--color-text-light);
  &:hover {
    background-color: ${({ theme }) => theme.color.failureRed};
    color: var(--color-text-light);
  }
`;

type LinkBtnProps = {
  text: string;
  url: string;
};

export const LinkButton = ({ text, url }: LinkBtnProps) => {
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
  const router = useRouter();
  return (
    <StyledSignOut
      onClick={async () => {
        await signOutUser();
        router.push("/");
      }}
    >
      {text}
    </StyledSignOut>
  );
};
