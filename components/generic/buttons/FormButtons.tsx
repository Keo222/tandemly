import { signOutUser } from "@/pages/login/_helperLogin";
import React from "react";
import styled from "styled-components";

// Styled Components
const BasicBtn = styled.button`
  width: fit-content;
  padding: 0.8rem 1.5rem;
  margin-inline: auto;
  border-radius: 5px;

  transition: all 0.2s;

  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 500;

  &:hover {
    background-color: transparent;
    color: var(--color-text-light);
    cursor: pointer;
  }
`;
const StyledSubmit = styled(BasicBtn)`
  background-color: var(--color-highlight-1);
  border: 2px solid var(--color-highlight-1);
`;

type ButtonProps = {
  text?: string;
};

export const SubmitButton = ({ text = "Submit" }: ButtonProps) => {
  return <StyledSubmit type="submit">{text}</StyledSubmit>;
};
