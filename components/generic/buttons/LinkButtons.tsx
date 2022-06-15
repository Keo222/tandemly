import React from "react";
import Link from "next/link";
import styled from "styled-components";

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

type Props = {
  text: string;
  url: string;
};

export const NavLinkButton = ({ text, url }: Props) => {
  return (
    <Link href={url}>
      <LinkBtn>{text}</LinkBtn>
    </Link>
  );
};
