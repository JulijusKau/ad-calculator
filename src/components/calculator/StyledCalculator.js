import styled from "styled-components";

export const StyledMainDiv = styled.div`
  padding: 20px var(--mainPaddingLeftRight);
  background-color: red;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
`;

export const StyledTopDiv = styled.div`
  background-color: gray;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledBottomDiv = styled.div`
  background-color: green;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledOptionsDiv = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  background-color: yellow;
`;

export const StyledInformationDiv = styled.div`
  height: 70%;
  width: 50%;
  background-color: blue;
`;

export const StyledReusableButton = styled.button`
  width: 200px;
  height: 100px;
`;
