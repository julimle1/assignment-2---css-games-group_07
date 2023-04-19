// select all HTML elements with the class "card" and store them in a variable called "cards"
const cards = document.querySelectorAll(".card");

// create a function called "flipCard" that toggles the "is-flipped" class of the clicked card
function flipCard() {
  // toggle the "is-flipped" class of the clicked card
  this.classList.toggle("is-flipped");
}

// add a click event listener to each card that runs the "flipCard" function when clicked
cards.forEach((card) => card.addEventListener("click", flipCard));

// create an empty array called "flippedCards"
let flippedCards = [];

// create a new "flipCard" function that only allows a maximum of 2 cards to be flipped at a time and flips them back after a 1-second delay
function flipCard() {
  // if less than 2 cards are flipped, toggle the "is-flipped" class of the clicked card and add it to the "flippedCards" array
  if (flippedCards.length < 2) {
    this.classList.toggle("is-flipped");
    flippedCards.push(this);
  }
  // if 2 cards are flipped, remove the "is-flipped" class from each card in the "flippedCards" array after a 1-second delay and reset the "flippedCards" array to an empty array
  if (flippedCards.length === 2) {
    setTimeout(() => {
      flippedCards.forEach((card) => card.classList.remove("is-flipped"));
      flippedCards = [];
    }, 1000);
  }
}

// add a click event listener to each card that runs the new "flipCard" function when clicked
cards.forEach((card) => card.addEventListener("click", flipCard));
