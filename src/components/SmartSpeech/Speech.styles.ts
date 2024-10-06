import styled from "styled-components";

export const SpeechContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 40px;
  padding: 5rem;

  .text-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;

    h3 {
      font-size: 46px;
      font-weight: 500;
      line-height: 55.2px;
      text-align: left;
      color: #444444;
      width: 100%;
      text-align: center;
    }

    h4 {
      font-size: 32px;
      font-weight: 400;
      line-height: 38.4px;
      text-align: left;
      color: #444444;
      width: 100%;
      text-align: center;
    }
  }

  .icon-col {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .icon {
      width: 70%;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 60px 40px;
    margin-top: 30px;
    border-radius: 52px;
    border-top: 1px solid rgba(1, 125, 185, 1);
    border-bottom: 1px solid rgba(1, 125, 185, 1);

    .text-wrapper {
      h3 {
        font-size: 24px;
        font-weight: 500;
        line-height: 28.8px;
        text-align: left;
      }

      h4 {
        font-size: 12px;
        font-weight: 400;
        line-height: 14.4px;
        text-align: left;
      }
    }

    .icon-col {
      width: 24%;
      display: flex;
      justify-content: flex-end;
      .icon {
        height: 30px;
        width: 20px;
      }
    }

    .row {
      justify-content: space-between;
    }

    .row > * {
      width: auto;
    }
  }
`;
