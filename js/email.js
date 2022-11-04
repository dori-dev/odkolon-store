let email = document.getElementById("email");
email.addEventListener("input", function () {
  email.style.direction = "ltr";
  if (email.value == "") {
    email.style.direction = "rtl";
  }
});
