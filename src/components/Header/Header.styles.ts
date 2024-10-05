import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #cccccc;
  border-radius: 69px;

  .right-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .button-chat {
      gap: 5px;

      .sub-icon {
        vertical-align: top;
      }
    }
  }

  @media (max-width: 450px) {
    border: 0px;
    box-shadow: none;

    .right-content {
      .icons {
        display: none;
      }
    }
  }
`;
