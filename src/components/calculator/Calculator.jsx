import {
  StyledBottomDiv,
  StyledFontAwesomeIcon,
  StyledInformationDiv,
  StyledMainDiv,
  StyledOptionsDivLeft,
  StyledOptionsDivRight,
  StyledOptionsRow,
  StyledReusableButton,
  StyledSocialMediaName,
  StyledTopDiv,
} from "./StyledCalculator";

import {
  faFacebook,
  faSquareInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Calculator = () => {
  return (
    <StyledMainDiv>
      <StyledTopDiv>
        <StyledOptionsDivLeft></StyledOptionsDivLeft>
        <StyledOptionsDivRight>
          <StyledOptionsRow>
            <StyledFontAwesomeIcon icon={faFacebook} />
            <StyledSocialMediaName>Facebook</StyledSocialMediaName>
          </StyledOptionsRow>
          <StyledOptionsRow>
            <StyledFontAwesomeIcon icon={faSquareInstagram} />
            <StyledSocialMediaName>Instagram</StyledSocialMediaName>
          </StyledOptionsRow>
          <StyledOptionsRow>
            <StyledFontAwesomeIcon icon={faTwitter} />
            <StyledSocialMediaName>Twitter</StyledSocialMediaName>
          </StyledOptionsRow>
          <StyledOptionsRow>
            <StyledFontAwesomeIcon icon={faTiktok} />
            <StyledSocialMediaName>TikTok</StyledSocialMediaName>
          </StyledOptionsRow>
        </StyledOptionsDivRight>
      </StyledTopDiv>
      <StyledBottomDiv>
        <StyledInformationDiv>aaaaaaaaaaaaaa</StyledInformationDiv>
        <StyledReusableButton>CLICK ME</StyledReusableButton>
      </StyledBottomDiv>
    </StyledMainDiv>
  );
};
