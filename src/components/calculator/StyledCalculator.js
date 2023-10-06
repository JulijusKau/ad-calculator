import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledMainDiv = styled.div`
  padding: 20px var(--mainPaddingLeftRight);
  display: flex;
  flex-direction: column;
`;

export const StyledTopDiv = styled.div`
  /* background-color: gray; */
  height: 600px;
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
  width: min(30vw, 80px);
  height: min(30vw, 80px);
  padding: 10px 0;
  color: var(--brandbookColorC);
`;

export const StyledSocialMediaName = styled.span`
  font-family: "HEADING";
  font-size: 32px;
  padding: 0 20px;
  color: transparent;
  transition: color 1s ease;
  ${StyledFontAwesomeIcon}:hover + & {
    color: var(--brandbookColorC);
  }
`;

export const StyledOptionsDivRight = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: left;

  & ${StyledOptionsRow}:nth-child(1) ${StyledFontAwesomeIcon} :hover {
    cursor: pointer;
    transition: color 1s ease-in-out;
    color: #4267b2;
  }
  & ${StyledOptionsRow}:nth-child(2) ${StyledFontAwesomeIcon} :hover {
    cursor: pointer;
    transition: color 1s ease-in-out;
    color: #f56040;
  }
  & ${StyledOptionsRow}:nth-child(3) ${StyledFontAwesomeIcon} :hover {
    cursor: pointer;
    transition: color 1s ease-in-out;
    color: #1da1f2;
  }
  & ${StyledOptionsRow}:nth-child(4) ${StyledFontAwesomeIcon} :hover {
    cursor: pointer;
    transition: color 1s ease-in-out;
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
