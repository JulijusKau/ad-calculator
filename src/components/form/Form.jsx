import {
  StyledForm,
  StyledFormSubmitButton,
  StyledInputDescription,
  StyledInputDiv,
  StyledInputName,
  StyledSimpleInput,
  StyledSliderInput,
  StyledSliderNumber,
  StyledSocialMediaOutletName,
} from "./StyledForm";

export const Form = ({ socialMedia, inputData, setInputData }) => {
  const handleOnValueChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm id="Form" onSubmit={handleOnSubmit}>
      <StyledInputDiv>
        <StyledInputName>
          <StyledSocialMediaOutletName>
            {socialMedia}
          </StyledSocialMediaOutletName>{" "}
          AD SPEND PER WHATEVER
        </StyledInputName>
        <StyledInputDescription>
          This is some simple text which can change varying on your social media
          choice.
        </StyledInputDescription>
        <StyledSimpleInput
          name="firstInput"
          type="number"
          min={1}
          max={5}
          onInvalid={(e) => {
            e.target.setCustomValidity(
              "Please, enter a number between 1 and 5"
            );
          }}
          required
          placeholder="Choose a number from 1 to 5"
          onChange={handleOnValueChange}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
        />
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledInputName>
          INPUT FOR YOUR PERSONAL{" "}
          <StyledSocialMediaOutletName>
            {socialMedia}
          </StyledSocialMediaOutletName>{" "}
          THOUGHTS
        </StyledInputName>
        <StyledInputDescription>
          Once again, I am a front-end developer not a marketing specialist.
        </StyledInputDescription>
        <StyledSimpleInput
          type="text"
          placeholder="Write something here"
          name="secondInput"
          onInvalid={(e) => {
            e.target.setCustomValidity("Write something");
          }}
          required
          onChange={handleOnValueChange}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
        />
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledInputName>
          SLIDER INPUT NUMBER ONE{" "}
          <StyledSocialMediaOutletName>
            {socialMedia}
          </StyledSocialMediaOutletName>{" "}
          STYLE
        </StyledInputName>
        <StyledInputDescription>
          This kind of input is different from the others. Can you spot the
          difference? Basically I will copy paste this text for the other slider
          input.
        </StyledInputDescription>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <StyledSliderInput
            type="range"
            min="1"
            max="100"
            name="thirdInput"
            onChange={handleOnValueChange}
          />{" "}
          <StyledSliderNumber>{inputData.thirdInput}</StyledSliderNumber>
        </div>
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledInputName>
          SLIDER INPUT NUMBER TWO{" "}
          <StyledSocialMediaOutletName>
            {socialMedia}
          </StyledSocialMediaOutletName>{" "}
          STYLE
        </StyledInputName>
        <StyledInputDescription>
          This kind of input is different from the others. Can you spot the
          difference? Basically I will copy paste this text for the other slider
          input.
        </StyledInputDescription>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <StyledSliderInput
            type="range"
            min="1"
            max="100"
            name="fourthInput"
            onChange={handleOnValueChange}
          />{" "}
          <StyledSliderNumber>{inputData.fourthInput}</StyledSliderNumber>
        </div>
      </StyledInputDiv>
      <StyledFormSubmitButton
        onClick={() => {
          console.log(inputData);
          if (
            inputData.firstInput === "" ||
            inputData.secondInput === "" ||
            inputData.thirdInput === "" ||
            inputData.fourthInput === ""
          ) {
            alert("Did you really input all the data?");
          } else {
            alert("Congratulations, let us see the results");
          }
        }}
      >
        Let's calculate!
      </StyledFormSubmitButton>
    </StyledForm>
  );
};
