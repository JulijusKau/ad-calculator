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
    socialMedia: "",
  });

  const [socialMediaOutlet, setSocialMediaOutlet] = useState("");

  const [resultWindowDisplay, setResultWindowDisplay] = useState("none");

  const [inputDisplay, setInputDisplay] = useState(false);

  const handleFacebookIconClick = () => {
    setSocialMediaOutlet("FACEBOOK");
    setInputData({
      firstInput: "",
      secondInput: "",
      thirdInput: "",
      fourthInput: "",
      socialMedia: "FACEBOOK",
    });
    document.getElementById("Form").reset();
    setResultWindowDisplay("none");
    setInputDisplay(true);
  };
  const handleInstagramIconClick = () => {
    setSocialMediaOutlet("INSTAGRAM");
    setInputData({
      firstInput: "",
      secondInput: "",
      thirdInput: "",
      fourthInput: "",
      socialMedia: "INSTAGRAM",
    });
    document.getElementById("Form").reset();
    setResultWindowDisplay("none");
    setInputDisplay(true);
  };
  const handleTwitterIconClick = () => {
    setSocialMediaOutlet("TWITTER");
    setInputData({
      firstInput: "",
      secondInput: "",
      thirdInput: "",
      fourthInput: "",
      socialMedia: "TWITTER",
    });
    document.getElementById("Form").reset();
    setResultWindowDisplay("none");
    setInputDisplay(true);
  };
  const handleTikTokIconClick = () => {
    setSocialMediaOutlet("TIK TOK");
    setInputData({
      firstInput: "",
      secondInput: "",
      thirdInput: "",
      fourthInput: "",
      socialMedia: "TIK TOK",
    });
    document.getElementById("Form").reset();
    setResultWindowDisplay("none");
    setInputDisplay(true);
  };

  return (
    <StyledMainDiv>
      <StyledTopDiv>
        <StyledOptionsDivLeft className="wrapper">
          <Form
            setInputDisplay={setInputDisplay}
            inputData={inputData}
            setInputData={setInputData}
            socialMedia={socialMediaOutlet}
            setSocialMedia={setSocialMediaOutlet}
            setResultWindowDisplay={setResultWindowDisplay}
            inputDisplay={inputDisplay}
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
        <ResultWindow
          inputData={inputData}
          ResultWindowDisplay={resultWindowDisplay}
        />
      </StyledBottomDiv>
    </StyledMainDiv>
  );
};
