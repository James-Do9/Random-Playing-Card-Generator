/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let topSuit = document.querySelector(".topSuit");
  let bottomSuit = document.querySelector(".bottomSuit");
  let img = document.querySelector(".suitIcon");
  let num = generateRandomNumber();
  let suit = generateRandomSuit();
  img.innerHTML = suit;
  topSuit.innerHTML = num + suit;
  bottomSuit.innerHTML = num + suit;
  if (suit == "&#9829" || suit == "&#9830") {
    topSuit.style.color = "rgb(146,22,38)";
    img.style.color = "rgb(146,22,38)";
    bottomSuit.style.color = "rgb(146,22,38)";
  }
};
function generateRandomNumber() {
  let numArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let index = Math.floor(Math.random() * numArray.length);
  return numArray[index];
}

function generateRandomSuit() {
  let numArray = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let index = Math.floor(Math.random() * numArray.length);
  return numArray[index];
}
