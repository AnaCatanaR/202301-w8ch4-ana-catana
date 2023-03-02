import styled from "styled-components";

const KeyStyled = styled.span`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #404041;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 20px #fff;
  margin: 10px;
  border: 1px solid #edf1f2;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  .buttons {
    position: relative;
    display: grid;
  }

  .buttons span:active {
    box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.1);
    box-shadow: -5px -5px 10px #d0d0d0;
    color: red;
  }

  .clear {
    background-color: #626262;
    color: #fff;
  }

  .addition {
    grid-row: span 2;
    background-color: #626262;
    color: #fff;
  }

  .zero {
    grid-column: span 2;
  }
`;

export default KeyStyled;
