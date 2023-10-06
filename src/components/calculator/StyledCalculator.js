import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledMainDiv = styled.div`
  padding: 20px var(--mainPaddingLeftRight);
  display: flex;
  flex-direction: column;
`;

export const StyledTopDiv = styled.div`
  /* background-color: gray; */
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

export const StyledOptionsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: min(30vw, 50px);
  height: min(30vw, 50px);
  padding: 10px 0;
  color: var(--brandbookColorC);
  @media (max-width: 650px) {
    width: min(30vw, 35px);
    height: min(30vw, 35px);
  }
`;

export const StyledSocialMediaHeader = styled.span`
  font-family: "TEXT";
  font-size: 25px;
  color: var(--brandbookColorC);
  /* text-shadow: 3px 3px 0 var(--brandbookColorA); */
  text-align: left;
  padding-bottom: 20px;
  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

export const StyledSocialMediaName = styled.span`
  font-family: "TEXT";
  font-size: 23px;
  padding: 0 0 0 10px;
  color: transparent;
  transition: color 1s ease;
  ${StyledFontAwesomeIcon}:hover + & {
    color: var(--brandbookColorC);
    text-shadow: 3px 3px 0 var(--brandbookColorA);
  }
  @media (max-width: 650px) {
    font-size: 13px;
    padding: 5px;
  }
`;

export const StyledOptionsDivRight = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  border: 0px solid var(--brandbookColorD);
  border-radius: var(--mainBorderRadius);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 20px;
  margin-bottom: var(--mainMarginBottom);

  & ${StyledOptionsRow}:nth-child(2) ${StyledFontAwesomeIcon} :hover {
    cursor: pointer;
    transition: color 0.5s ease-in-out;
    color: #4267b2;
  }
  & ${StyledOptionsRow}:nth-child(3) ${StyledFontAwesomeIcon} :hover {
    cursor: pointer;
    transition: color 0.5s ease-in-out;
    color: #f56040;
  }
  & ${StyledOptionsRow}:nth-child(4) ${StyledFontAwesomeIcon} :hover {
    cursor: pointer;
    transition: color 0.5s ease-in-out;
    color: #1da1f2;
  }
  & ${StyledOptionsRow}:nth-child(5) ${StyledFontAwesomeIcon} :hover {
    cursor: pointer;
    transition: color 0.5s ease-in-out;
    color: #000000;
  }
`;

export const StyledOptionsDivLeft = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
