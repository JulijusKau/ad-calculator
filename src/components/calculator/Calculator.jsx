import { Form } from "../form/Form";
import { ResultWindow } from "../resultWindow/ResultWindow";
import {
  StyledBottomDiv,
  StyledFontAwesomeIcon,
  StyledMainDiv,
  StyledOptionsDivLeft,
  StyledOptionsDivRight,
  StyledOptionsRow,
  StyledSocialMediaHeader,
  StyledSocialMediaName,
  StyledTopDiv,
} from "./StyledCalculator";

import "./socialMediaDivBackground.css";

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
        <StyledOptionsDivLeft className="wrapper">
          <Form />
        </StyledOptionsDivLeft>
        <StyledOptionsDivRight className="wrapper">
          <StyledSocialMediaHeader>
            Choose Your Social Media Outlet
          </StyledSocialMediaHeader>
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
      <StyledBottomDiv className="wrapper">
        <ResultWindow />
      </StyledBottomDiv>
    </StyledMainDiv>
  );
};
