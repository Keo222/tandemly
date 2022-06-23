import styled from "styled-components";

export const GreyBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -5;
  background-color: ${({ theme }) => theme.color.darkGrey}; ;
`;
