import {
  StyledCalculationsDiv,
  StyledResultDiv,
  StyledCalculationsName,
  StyledCalculationsDescription,
  StyledContactButton,
  StyledCalculationsResult,
} from "./StyledResultWindow";

export const ResultWindow = ({ ResultWindowDisplay, inputData }) => {
  const numberOne = inputData.firstInput / 7;
  const numberTwo = inputData.fourthInput * inputData.thirdInput;
  const numberThree = numberOne + numberTwo;

  return (
    <StyledResultDiv style={{ display: `${ResultWindowDisplay}` }}>
      <StyledCalculationsDiv>
        <StyledCalculationsName>
          <StyledCalculationsResult>
            {inputData.socialMedia}
          </StyledCalculationsResult>{" "}
          Calculations Number One
        </StyledCalculationsName>
        <StyledCalculationsDescription>
          By dividing your first input number by 7 we get{" "}
          <StyledCalculationsResult>{numberOne}</StyledCalculationsResult>.
        </StyledCalculationsDescription>
      </StyledCalculationsDiv>
      <StyledCalculationsDiv>
        <StyledCalculationsName>
          {" "}
          <StyledCalculationsResult>
            {inputData.socialMedia}
          </StyledCalculationsResult>{" "}
          Calculations Number Two
        </StyledCalculationsName>
        <StyledCalculationsDescription>
          By multiplying your slider options together we get{" "}
          <StyledCalculationsResult>{numberTwo}</StyledCalculationsResult>.
        </StyledCalculationsDescription>
      </StyledCalculationsDiv>
      <StyledCalculationsDiv>
        <StyledCalculationsName>
          {" "}
          <StyledCalculationsResult>
            {inputData.socialMedia}
          </StyledCalculationsResult>{" "}
          Calculations Number Three
        </StyledCalculationsName>
        <StyledCalculationsDescription>
          By adding Calculations Number One and Calculations Number Two we get{" "}
          <StyledCalculationsResult>{numberThree}</StyledCalculationsResult>. Oh
          and the text which you have entered was{" "}
          <StyledCalculationsResult>
            {inputData.secondInput}
          </StyledCalculationsResult>
          .
        </StyledCalculationsDescription>
      </StyledCalculationsDiv>
      <StyledContactButton>
        <a
          style={{ color: "#000000", textDecoration: "none" }}
          href="https://ad2sky.com/"
        >
          Contact us!
        </a>
      </StyledContactButton>
    </StyledResultDiv>
  );
};
