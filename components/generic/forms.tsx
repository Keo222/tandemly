import styled from "styled-components";

export const FormOrganization = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: clamp(200px, 60vw, 60ch);
  margin-inline: auto;
  margin-block: 5rem;

  /* & input:last-of-type {
    margin-bottom: 3rem;
  } */
`;

const SCFormHeader = styled.h3`
  text-align: center;
`;

type FormHeaderProps = {
  text: string;
};

export const FormHeader = ({ text }: FormHeaderProps) => {
  return <SCFormHeader>{text}</SCFormHeader>;
};

export const StyledTextInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
