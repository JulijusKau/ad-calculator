import {
  StyledBottomDiv,
  StyledInformationDiv,
  StyledMainDiv,
  StyledOptionsDiv,
  StyledReusableButton,
  StyledTopDiv,
} from "./StyledCalculator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Calculator = () => {
  return (
    <StyledMainDiv>
      <StyledTopDiv>
        <StyledOptionsDiv></StyledOptionsDiv>
        <StyledOptionsDiv></StyledOptionsDiv>
      </StyledTopDiv>
      <StyledBottomDiv>
        <StyledInformationDiv>aaaaaaaaaaaaaa</StyledInformationDiv>
        <StyledReusableButton>CLICK ME</StyledReusableButton>
      </StyledBottomDiv>
    </StyledMainDiv>
  );
};
