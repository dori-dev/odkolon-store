function disabled(element) {
  element.setAttribute("disabled", true);
}

function setActiveStyle(colorName) {
  document.querySelectorAll(".alternate-style").forEach(disabled);
  document
    .querySelector(`.alternate-style[title=${colorName}]`)
    .removeAttribute("disabled");
}

document.querySelector(".toggle-style-switcher").onclick = function () {
  var element = document.querySelector(".style-switcher");
  if (element.className == "style-switcher") {
    element.className = "style-switcher open";
  } else {
    element.className = "style-switcher";
  }
};
