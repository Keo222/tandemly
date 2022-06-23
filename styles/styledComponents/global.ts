import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.darkGrey};
  }
`;

export default GlobalStyle;
