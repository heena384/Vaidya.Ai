import styled from "styled-components";

export const WorkContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 5rem;

  .text {
    background: linear-gradient(85.84deg, #017db9 68.1%, #003853 122.63%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 100%;
    text-align: center;
    span {
      text-align: center; /* Center the text */
      font-size: 46px;
      font-weight: 500;
      line-height: 55.2px;
      text-align: center;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 20px;
    .text {
      span {
        font-size: 32px;
        font-weight: 500;
        line-height: 38.4px;
        text-align: center;
      }
    }
    .h-40 {
      height: 40px;
    }
  }
`;
