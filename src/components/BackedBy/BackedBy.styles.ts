import styled from "styled-components";

export const BackedContainer = styled.div`
  margin-top: 40px;
  h3,
  h4 {
    background: linear-gradient(90deg, #ffffff 0%, #68c8f6 117.98%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 46px;
    font-weight: 500;
    line-height: 55.2px;
    text-align: center;
  }

  .safety {
    padding-top: 5rem;
  }

  h4 {
    font-size: 32px;
    font-weight: 400;
    line-height: 38.4px;
    text-align: center;
  }
  .row-wrapper {
    padding-top: 5rem;
    max-width: 100%;

    .icon-wrapper {
      display: flex;
      justify-content: center;
    }

    .content-wrapper {
      height: 100%;
      justify-content: flex-start;
      display: flex;
      align-items: center;

      .content-wrapper-row {
        max-width: 499px;

        .vector-top-left {
        }
        .vector-bottom-col {
          justify-content: flex-end;
          display: flex;
          align-items: flex-end;
        }
        .text-col {
          padding: 40px 0px;
          text-align: center;

          span {
            padding: 30px 0px;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }

  .privacy-row {
    padding: 5rem 6rem;
    max-width: 100%;
    .col-md-4 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .privacy-card {
      padding: 20px;
      backdrop-filter: blur(96.7493667602539px);
      background: linear-gradient(
        180deg,
        rgba(104, 200, 246, 0.46) 0%,
        rgba(40, 177, 244, 0.2) 100%
      );
      width: 205px;
      height: 272px;
      gap: 0px;
      border-radius: 20.66px;
      opacity: 0px;

      .privacy-icon {
        width: 100%;
      }

      p {
        height: calc(100% - 135px);
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 0px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #f0f8fc;
      }
    }
  }
`;
