import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  row-gap: 20px;
`;

export const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 2px solid var(--brandbookColorC);
  padding-top: 5px;
  &:nth-child(1) {
    border-top: none;
  }
`;

export const StyledInputName = styled.span`
  font-family: "TEXT";
  color: var(--brandbookColorC);
  font-size: 23px;
  font-weight: bold;
  @media (max-width: 650px) {
    font-size: var(--headerFontSizeSmallScreen);
  }
`;

export const StyledInputDescription = styled.span`
  font-family: "TEXT";
  color: var(--brandbookColorC);
  font-size: 17px;
  @media (max-width: 650px) {
    font-size: var(--textFontSizeSmallScreen);
  }
`;

export const StyledSimpleInput = styled.input`
  width: 30%;
  height: 20px;
  font-size: 17px;
  font-family: "TEXT";
  border: 1px solid var(--brandbookColorC);
  border-radius: 3px;
  margin: 5px 0;
  color: var(--brandbookColorA);
  &:focus {
    outline: 1px solid var(--brandbookColorC);
  }
  @media (max-width: 650px) {
    height: 20px;
    width: 100%;
    font-size: var(--textFontSizeSmallScreen);
  }
`;

export const StyledSliderInput = styled.input`
  margin: 10px 0 0 0;
  width: 50%;
  -webkit-appearance: none;
  appearance: none;
  background: var(--brandbookColorA);
  outline: 1px solid white;
  height: 10px;
  border-radius: 5px;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background: var(--brandbookColorC);
  }
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background: var(--brandbookColorC);
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const StyledFormSubmitButton = styled.button`
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
