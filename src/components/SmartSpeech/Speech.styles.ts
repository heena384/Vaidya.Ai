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
`;
