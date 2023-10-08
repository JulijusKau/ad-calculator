import styled from "styled-components";

export const StyledResultDiv = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
`;

export const StyledCalculationsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 90%;
  text-align: center;
  margin-bottom: 30px;
  border-top: 2px solid var(--brandbookColorC);
  padding-top: 5px;
  &:nth-child(1) {
    border-top: none;
    padding-top: 15px;
  }
`;

export const StyledCalculationsName = styled.span`
  font-family: "TEXT";
  color: var(--brandbookColorC);
  font-size: 23px;
  font-weight: bold;
  @media (max-width: 650px) {
    font-size: var(--headerFontSizeSmallScreen);
  }
`;

export const StyledCalculationsDescription = styled.span`
  font-family: "TEXT";
  color: var(--brandbookColorC);
  font-size: 17px;
  @media (max-width: 650px) {
    font-size: var(--textFontSizeSmallScreen);
  }
`;

// STILL NEED TO CHANGE THIS STYLING TO SOMETHING ELSE
export const StyledContactButton = styled.button`
  margin: 10px 0 20px 0;
  font-family: "TEXT";
  font-size: 17px;
  font-weight: bold;
  color: var(--brandbookColorA);
  background-color: var(--brandbookColorC);
  height: 40px;
  width: 150px;
  box-shadow: var(--mainBoxShadow);
  border-radius: var(--mainBorderRadius);
  align-self: center;
  &:hover {
    cursor: pointer;
    color: var(--brandbookColorC);
    background-color: var(--brandbookColorD);
  }
  @media (max-width: 650px) {
    font-size: var(--textFontSizeSmallScreen);
  }
`;

export const StyledCalculationsResult = styled.span`
  font-family: "TEXT";
  font-size: 25px;
  color: var(--brandbookColorE);
  @media (max-width: 650px) {
    font-size: var(--textFontSizeSmallScreen);
  }
`;
