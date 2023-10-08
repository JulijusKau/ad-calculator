import {
  StyledForm,
  StyledFormSubmitButton,
  StyledInputDescription,
  StyledInputDiv,
  StyledInputName,
  StyledSimpleInput,
  StyledSliderInput,
} from "./StyledForm";

export const Form = () => {
  const handleOnFormSubmitButtonClick = (e) => {
    e.preventDefault();
    console.log("The form has been successfully submitted");
  };

  return (
    <StyledForm>
      <StyledInputDiv>
        <StyledInputName>FACEBOOK AD SPEND PER WHATEVER</StyledInputName>
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
          INPUT FOR YOUR PERSONAL FACEBOOK THOUGHTS
        </StyledInputName>
        <StyledInputDescription>
          Once again, I am a front-end developer not a marketing specialist.
        </StyledInputDescription>
        <StyledSimpleInput type="text" placeholder="Write something here" />
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledInputName>
          SLIDER INPUT NUMBER ONE FACEBOOK STYLE
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
          SLIDER INPUT NUMBER TWO FACEBOOK STYLE
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
