const iconError = document.querySelector(".iconError");
const errorMessage = document.querySelector(".errorMessage");
const submitButton = document.querySelector(".submitButton");
const emailAddress = document.querySelector("#emailAddress");
const input = document.querySelector("input");
const okMessage = document.querySelector(".okMessage");
const emailFormat = new RegExp("[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+.[a-z]{2,}");

submitButton.addEventListener("click", function () {
  var email = emailAddress.value;
  var valid = emailFormat.test(email);

  if (valid == false) {
    iconError.style.display = "block";
    errorMessage.style.display = "block";
    input.style.border = "2px solid var(--Soft-Red)";
  } else {
    iconError.style.display = "none";
    errorMessage.style.display = "none";
    input.style.border = "1px solid var(--Desaturated-Red)";

    okMessage.style.display = "grid";
    okMessage.style.animationPlayState = "running";
    setTimeout(function () {
      okMessage.style.display = "none";
    }, 3000);
  }
});
