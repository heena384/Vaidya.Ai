import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 100vh;
  background-color: #fff;
  position: relative;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #68c8f6;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1; /* This allows the content to grow and center properly */
  }

  .text {
    width: 100%;
    text-align: center;
    padding-bottom: 1rem;
    span {
      background: linear-gradient(85.84deg, #017db9 68.1%, #003853 122.63%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 46px;
      font-weight: 500;
      line-height: 55.2px;
    }
  }

  .chat-btn {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  /* Position the fractal footer at the bottom */
  .fractal-footer {
    padding-bottom: 40px; /* Add padding to bottom */
    text-align: center;
    p {
      margin-top: 10px;
    }
  }
`;
