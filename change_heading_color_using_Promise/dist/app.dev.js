"use strict";

h1 = document.querySelector('h1'); // h1.style.color = "red";

function changeClr(color, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

;
changeClr("red", 1000).then(function () {
  return changeClr("blue", 1000);
}).then(function () {
  return changeClr("orange", 1000);
}).then(function () {
  changeClr("green", 1000);
});