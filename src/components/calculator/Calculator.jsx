import { useState } from "react";
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
  const [inputData, setInputData] = useState({
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    fourthInput: "",
  });

  const [socialMediaOutlet, setSocialMediaOutlet] = useState("");

  const handleFacebookIconClick = () => {
    setSocialMediaOutlet("FACEBOOK");
    setInputData({
      firstInput: "",
      secondInput: "",
      thirdInput: "",
      fourthInput: "",
    });
    document.getElementById("Form").reset();
  };
  const handleInstagramIconClick = () => {
    setSocialMediaOutlet("INSTAGRAM");
    setInputData({
      firstInput: "",
      secondInput: "",
      thirdInput: "",
      fourthInput: "",
    });
    document.getElementById("Form").reset();
  };
  const handleTwitterIconClick = () => {
    setSocialMediaOutlet("TWITTER");
    setInputData({
      firstInput: "",
      secondInput: "",
      thirdInput: "",
      fourthInput: "",
    });
    document.getElementById("Form").reset();
  };
  const handleTikTokIconClick = () => {
    setSocialMediaOutlet("TIK TOK");
    setInputData({
      firstInput: "",
      secondInput: "",
      thirdInput: "",
      fourthInput: "",
    });
    document.getElementById("Form").reset();
  };

  return (
    <StyledMainDiv>
      <StyledTopDiv>
        <StyledOptionsDivLeft className="wrapper">
          <Form
            inputData={inputData}
            setInputData={setInputData}
            socialMedia={socialMediaOutlet}
          />
        </StyledOptionsDivLeft>
        <StyledOptionsDivRight className="wrapper">
          <StyledSocialMediaHeader>
            Choose Your Social Media Outlet
          </StyledSocialMediaHeader>
          <StyledOptionsRow>
            <StyledFontAwesomeIcon
              onClick={handleFacebookIconClick}
              icon={faFacebook}
              style={{
                color: `${
                  socialMediaOutlet === "FACEBOOK" ? "#4267b2" : "#ffffffff"
                }`,
              }}
            />
            <StyledSocialMediaName
              style={{
                color: `${
                  socialMediaOutlet === "FACEBOOK" ? "#ffffffff" : "transparent"
                }`,
              }}
            >
              Facebook
            </StyledSocialMediaName>
          </StyledOptionsRow>
          <StyledOptionsRow>
            <StyledFontAwesomeIcon
              onClick={handleInstagramIconClick}
              icon={faSquareInstagram}
              style={{
                color: `${
                  socialMediaOutlet === "INSTAGRAM" ? "#f56040" : "#ffffffff"
                }`,
              }}
            />
            <StyledSocialMediaName
              style={{
                color: `${
                  socialMediaOutlet === "INSTAGRAM"
                    ? "#ffffffff"
                    : "transparent"
                }`,
              }}
            >
              Instagram
            </StyledSocialMediaName>
          </StyledOptionsRow>
          <StyledOptionsRow>
            <StyledFontAwesomeIcon
              onClick={handleTwitterIconClick}
              icon={faTwitter}
              style={{
                color: `${
                  socialMediaOutlet === "TWITTER" ? "#1da1f2" : "#ffffffff"
                }`,
              }}
            />
            <StyledSocialMediaName
              style={{
                color: `${
                  socialMediaOutlet === "TWITTER" ? "#ffffffff" : "transparent"
                }`,
              }}
            >
              Twitter
            </StyledSocialMediaName>
          </StyledOptionsRow>
          <StyledOptionsRow>
            <StyledFontAwesomeIcon
              onClick={handleTikTokIconClick}
              icon={faTiktok}
              style={{
                color: `${
                  socialMediaOutlet === "TIK TOK" ? "#000000" : "#ffffffff"
                }`,
              }}
            />
            <StyledSocialMediaName
              style={{
                color: `${
                  socialMediaOutlet === "TIK TOK" ? "#ffffffff" : "transparent"
                }`,
              }}
            >
              TikTok
            </StyledSocialMediaName>
          </StyledOptionsRow>
        </StyledOptionsDivRight>
      </StyledTopDiv>
      <StyledBottomDiv className="wrapper">
        <ResultWindow />
      </StyledBottomDiv>
    </StyledMainDiv>
  );
};
