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

export const Form = ({
  socialMedia,
  setSocialMedia,
  inputData,
  setInputData,
  setResultWindowDisplay,
  inputDisplay,
  setInputDisplay,
}) => {
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
            {inputDisplay && socialMedia}
          </StyledSocialMediaOutletName>{" "}
          {inputDisplay === false
            ? "PLEASE PICK A MEDIA OUTLET"
            : "AD SPEND PER WHATEVER"}
        </StyledInputName>
        <StyledInputDescription>
          {inputDisplay === false
            ? "PLEASE PICK A MEDIA OUTLET"
            : "This is some simple text which can change varying on your social media choice"}
        </StyledInputDescription>
        {inputDisplay && (
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
            onInput={handleOnValueChange}
          />
        )}
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledInputName>
          {inputDisplay === false
            ? "PLEASE PICK A MEDIA OUTLET"
            : "INPUT FOR YOUR PERSONAL THOUGHTS ON"}{" "}
          <StyledSocialMediaOutletName>
            {inputDisplay && socialMedia}
          </StyledSocialMediaOutletName>
        </StyledInputName>
        <StyledInputDescription>
          {inputDisplay === false
            ? "PLEASE PICK A MEDIA OUTLET"
            : "Once again, I am a front-end developer not a marketing specialist."}
        </StyledInputDescription>
        {inputDisplay && (
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
        )}
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledInputName>
          {inputDisplay === false
            ? "PLEASE PICK A MEDIA OUTLET"
            : "SLIDER INPUT NUMBER ONE"}{" "}
          <StyledSocialMediaOutletName>
            {inputDisplay && socialMedia}
          </StyledSocialMediaOutletName>
        </StyledInputName>
        <StyledInputDescription>
          {inputDisplay === false
            ? "PLEASE PICK A MEDIA OUTLET"
            : "This kind of input is different from the others. Can you spot the difference? Basically I will copy paste this text for the other slider input"}
        </StyledInputDescription>
        {inputDisplay && (
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
        )}
      </StyledInputDiv>
      <StyledInputDiv>
        <StyledInputName>
          {inputDisplay === false
            ? "PLEASE PICK A MEDIA OUTLET"
            : "SLIDER INPUT NUMBER TWO"}{" "}
          <StyledSocialMediaOutletName>
            {inputDisplay && socialMedia}
          </StyledSocialMediaOutletName>{" "}
        </StyledInputName>
        <StyledInputDescription>
          {inputDisplay === false
            ? "PLEASE PICK A MEDIA OUTLET"
            : "This kind of input is different from the others. Can you spot the difference? Basically I will copy paste this text for the other slider input"}
        </StyledInputDescription>
        {inputDisplay && (
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
        )}
      </StyledInputDiv>
      {inputDisplay && (
        <StyledFormSubmitButton
          onClick={() => {
            console.log(inputData);
            if (
              inputData.firstInput === "" ||
              inputData.secondInput === "" ||
              inputData.thirdInput === "" ||
              inputData.fourthInput === "" ||
              inputData.firstInput > 5 ||
              inputData.firstInput < 1
            ) {
              alert("Did you really input all the correct data?");
            } else {
              alert("Congratulations, let us see the results");
              setResultWindowDisplay("flex");
              setInputDisplay(false);
              setSocialMedia("");
            }
          }}
        >
          Let's calculate!
        </StyledFormSubmitButton>
      )}
    </StyledForm>
  );
};
