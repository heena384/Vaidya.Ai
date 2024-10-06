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

  @media screen and (max-width: 450px) {
    padding: 20px;
    margin-top: 4rem;
    h3 {
      background: linear-gradient(85.84deg, #017db9 68.1%, #003853 122.63%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 32px;
      font-weight: 500;
      line-height: 38.4px;
      text-align: center;
    }

    .row-wrapper {
      padding: 20px;
      .icon-wrapper {
        .accuracy-text {
          color: rgba(68, 68, 68, 1) !important;
          font-size: 24px;
          font-weight: 500;
          line-height: 28.8px;
          text-align: left;
        }

        p {
          color: rgba(68, 68, 68, 1);
          font-size: 12px;
          font-weight: 400;
          line-height: 14.4px;
          text-align: left;
        }

        .icon-wrap {
          border-right: 1px solid rgba(195, 195, 195, 1);
        }

        .content-wrap {
          padding-left: 30px;
          justify-content: flex-start;
          display: flex;
          flex-direction: column;

          .sub-wrap {
            display: flex;
            gap: 50px;

            .text {
              width: 60px;
            }
          }

          .divider {
            border-left: 1px solid rgba(231, 231, 231, 1);
          }

          p {
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            color: rgba(68, 68, 68, 1);
            margin: 0px;
          }
          span {
            font-size: 8px;
            font-weight: 600;
            text-align: left;
            color: rgba(68, 68, 68, 1);
          }
        }
      }

      .content-wrapper {
        .content-wrapper-row {
          margin-top: 30px;
          .text-col {
            .badge-text {
              padding: 0px 30px;
              .badges {
                margin-top: 5px;
              }
              .leading-content {
                display: flex;
                .stats {
                  width: 130px;
                  /* padding-right: 20px; */
                }
                span {
                  color: rgba(1, 125, 185, 1);
                  font-size: 24px;
                  font-weight: 500;
                  line-height: 40.8px;
                  text-align: left;
                }

                p {
                  color: rgba(68, 68, 68, 1);
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 16.32px;
                  text-align: left;
                }

                .results-text {
                  margin-top: 10px;
                  width: 160px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
