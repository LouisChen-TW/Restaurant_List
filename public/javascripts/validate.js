const submitButton = document.querySelector("#submitButton");
const form = document.querySelector("#form");
submitButton.addEventListener("click", function onSubmitButtonClicked(event) {
  event.preventDefault();
  event.stopPropagation();
  form.classList.add("was-validated");
});
