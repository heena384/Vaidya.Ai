import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: #fff;
  padding-bottom: 40px;

  .text {
    background: linear-gradient(85.84deg, #017db9 68.1%, #003853 122.63%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    span {
      text-align: center; /* Center the text */
      font-size: 46px;
      font-weight: 500;
      line-height: 55.2px;
      text-align: center;
    }
  }

  @media screen and (max-width: 450px) {
    border-bottom: 1px solid #68c8f6;

    border-radius: 40px;
    .text {
      span {
        font-size: 32px;
        font-weight: 500;
        line-height: 38.4px;
        text-align: center;
      }
    }
  }
`;
