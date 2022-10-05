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
  const suits = ["♦", "♥", "♠", "♣"];
  return suits[genRandomNum(suits.length)];
}

// Generate the value of the card randomly
function genCardValue() {
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  return cards[genRandomNum(cards.length)];
}

// Generate random card
function genCard() {
  return {
    suit: genSuit(),
    value: genCardValue()
  };
}

window.onload = function() {
  //write your code here
  let card = genCard();

  console.log(card.suit);
  console.log(card.value);
};
