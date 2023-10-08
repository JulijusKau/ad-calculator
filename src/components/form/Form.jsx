import {
  StyledForm,
  StyledFormSubmitButton,
  StyledInputDescription,
  StyledInputDiv,
  StyledInputName,
  StyledSimpleInput,
  StyledSliderInput,
  StyledSocialMediaOutletName,
} from "./StyledForm";

export const Form = () => {
  const handleOnFormSubmitButtonClick = (e) => {
    e.preventDefault();
    console.log("The form has been successfully submitted");
  };

  return (
    <StyledForm>
      <StyledInputDiv>
        <StyledInputName>
          <StyledSocialMediaOutletName>FACEBOOK</StyledSocialMediaOutletName> AD
          SPEND PER WHATEVER
        </StyledInputName>
        <StyledInputDescription>
          This is some simple text which can change varying on your social media
          choice.
        </StyledInputDescription>
        <StyledSimpleInput
          type="number"
          min="1"
          max="5"
          placeholder="Choose a number from 1 to 5"
        />
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledInputName>
          INPUT FOR YOUR PERSONAL{" "}
          <StyledSocialMediaOutletName>FACEBOOK</StyledSocialMediaOutletName>{" "}
          THOUGHTS
        </StyledInputName>
        <StyledInputDescription>
          Once again, I am a front-end developer not a marketing specialist.
        </StyledInputDescription>
        <StyledSimpleInput type="text" placeholder="Write something here" />
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledInputName>
          SLIDER INPUT NUMBER ONE{" "}
          <StyledSocialMediaOutletName>FACEBOOK</StyledSocialMediaOutletName>{" "}
          STYLE
        </StyledInputName>
        <StyledInputDescription>
          This kind of input is different from the others. Can you spot the
          difference? Basically I will copy paste this text for the other slider
          input.
        </StyledInputDescription>
        <StyledSliderInput type="range" min="1" max="100" />
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledInputName>
          SLIDER INPUT NUMBER TWO{" "}
          <StyledSocialMediaOutletName>FACEBOOK</StyledSocialMediaOutletName>{" "}
          STYLE
        </StyledInputName>
        <StyledInputDescription>
          This kind of input is different from the others. Can you spot the
          difference? Basically I will copy paste this text for the other slider
          input.
        </StyledInputDescription>
        <StyledSliderInput type="range" min="1" max="100" />
      </StyledInputDiv>
      <StyledFormSubmitButton onClick={handleOnFormSubmitButtonClick}>
        Let's calculate!
      </StyledFormSubmitButton>
    </StyledForm>
  );
};
