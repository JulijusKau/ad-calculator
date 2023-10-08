import {
  StyledCalculationsDiv,
  StyledResultDiv,
  StyledCalculationsName,
  StyledCalculationsDescription,
  StyledContactButton,
} from "./StyledResultWindow";

export const ResultWindow = () => {
  return (
    <StyledResultDiv>
      <StyledCalculationsDiv>
        <StyledCalculationsName>Calculations Number One</StyledCalculationsName>
        <StyledCalculationsDescription>
          By dividing your first input number by 7 we get PLACEHOLDER.
        </StyledCalculationsDescription>
      </StyledCalculationsDiv>
      <StyledCalculationsDiv>
        <StyledCalculationsName>Calculations Number Two</StyledCalculationsName>
        <StyledCalculationsDescription>
          By multiplying your slider options together we get PLACEHOLDER.
        </StyledCalculationsDescription>
      </StyledCalculationsDiv>
      <StyledCalculationsDiv>
        <StyledCalculationsName>
          Calculations Number Three
        </StyledCalculationsName>
        <StyledCalculationsDescription>
          By adding Calculations Number One and Calculations Number Two we get
          PLACEHOLDER. Oh and the text which you have entered was PLACEHOLDER.
        </StyledCalculationsDescription>
      </StyledCalculationsDiv>
      <StyledContactButton>Contact us!</StyledContactButton>
    </StyledResultDiv>
  );
};
