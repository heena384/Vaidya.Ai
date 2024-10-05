import { Container } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    font-size: 14px;

    .toast-container {
      z-index: 9;
      position: fixed;
      top: 10px !important;
      right: 10px !important;
    }
  }
`;

export default GlobalStyle;

export const LayoutContainer = styled(Container)`
  margin-top: 80px;
  background: linear-gradient(180deg, #017db9 0%, #003853 100%);
  padding: 0px;
  font-family: "Poppins", sans-serif;

  .content {
    height: 100%;
    min-height: calc(100vh - 80px);
  }
  @media (min-width: 350px) and (max-width: 700px) {
    .content {
    }
  }
`;

export const InitialsText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
