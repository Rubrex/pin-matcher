// Variables
const generatorPinInputField = document.getElementById("generatedPinInput");
const numberField = document.getElementById("numberField");
const setPinInput = document.getElementById("setPinInput");
const verifyBtn = document.getElementById("verifyBtn");
// Functions
function randomNumberGenerator() {
  let number = Math.round(Math.random() * 10000);
  if (number > 999 && number < 10000) {
    return number;
  } else {
    return randomNumberGenerator();
  }
}

// Events
// Generate Random Number
document.getElementById("pinGenerator").addEventListener("click", function () {
  const number = randomNumberGenerator();
  generatorPinInputField.value = number;
});
// setPin
numberField.addEventListener("click", function (event) {
  const key = event.target.innerText;
  if (!isNaN(key)) {
    setPinInput.value += key;
  } else if (key === "C") {
    setPinInput.value = "";
  } else if (key === "<") {
    let numbers = setPinInput.value.split("");
    if (numbers.length == 0) {
      return;
    }
    numbers.pop();
    const newNumber = numbers.join("");
    setPinInput.value = newNumber;
  }
});
// Verify Pin
verifyBtn.addEventListener("click", function () {
  const setInputFieldValue = setPinInput.value;
  const generatedPinvalue = generatorPinInputField.value;
  if (
    setInputFieldValue === generatedPinvalue &&
    setInputFieldValue.length === 4
  ) {
    document.getElementById("didntMatch").style.display = "none";
    return (document.getElementById("didMatch").style.display = "block");
  }
  document.getElementById("didMatch").style.display = "none";
  return (document.getElementById("didntMatch").style.display = "block");
});
