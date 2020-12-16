export const adminToggleInput = (toggleInput, callback) => {
  const input = toggleInput.querySelector("input");
  const toggleDiv = toggleInput.querySelector("#toggleDiv");
  const divYes = toggleInput.querySelector("#Yes");
  const divNo = toggleInput.querySelector("#No");
  callback(input, toggleDiv, divYes, divNo);
};
