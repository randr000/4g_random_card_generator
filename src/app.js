/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Generates a random whole number between 0 and the number passed through inclusive
function genRandomNum(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

// Generate the suit of the card randomly
function genSuit() {
  const suits = [
    { name: "diamond", value: "♦" },
    { name: "heart", value: "♥" },
    { name: "spade", value: "♠" },
    { name: "club", value: "♣" }
  ];
  return suits[genRandomNum(suits.length)];
}

// Generate the value of the card randomly
function genCardValue() {
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  return cards[genRandomNum(cards.length)];
}

// Generate random card values and suit
function genCard() {
  let suit = genSuit();
  return {
    suitName: suit.name,
    suitValue: suit.value,
    value: genCardValue()
  };
}

window.onload = function() {
  //write your code here
  const cardElement = document.getElementById("card");
  const cardValue = document.getElementById("card-value");
  const suits = document.querySelectorAll(".suit");
  const genCardBtn = document.getElementById("genCardBtn");
  const genCardClickElements = [cardElement, genCardBtn];

  // Removes old suit classes
  function removeSuitClasses(element) {
    const suitClass = ["diamond", "heart", "spade", "club"];
    for (let cls of suitClass) {
      element.classList.remove(cls);
    }
  }

  // Sets the values and the suit in the DOM
  function setCardData() {
    let card = genCard();
    cardValue.innerText = card.value;

    for (let suit of suits) {
      suit.innerText = card.suitValue;
      removeSuitClasses(suit);
      suit.classList.add(card.suitName);
    }
  }

  setCardData();

  // Lets user click on elements to generate a new random card
  for (let element of genCardClickElements) {
    element.addEventListener("click", setCardData);
  }
};
