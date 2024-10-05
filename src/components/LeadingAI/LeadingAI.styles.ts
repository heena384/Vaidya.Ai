import styled from "styled-components";

export const LeadingAIContainer = styled.div`
  padding: 5rem;
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
          padding: 0px;

          .badge-text {
            display: flex;
            padding: 30px 0px;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: #fff;
            gap: 10px;

            .badges {
              margin-top: 12px;
            }

            span {
              font-size: 32px;
              font-weight: 500;
              line-height: 61.12px;
              text-align: left;
            }
            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 21.76px;
              text-align: left;
            }
          }
        }
      }
    }
  }
`;
