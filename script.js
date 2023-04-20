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
  // if 2 cards are flipped, check if they are of the same type
  if (flippedCards.length === 2) {
    setTimeout(() => {
      if (flippedCards[0].classList[1] === flippedCards[1].classList[1]) {
        // if the two cards are of the same type, hide them by setting their display property to none
        flippedCards.forEach((card) => (card.style.display = "none"));
      } else {
        // if the two cards are not of the same type, flip them back over
        flippedCards.forEach((card) => card.classList.remove("is-flipped"));
      }
      // reset the "flippedCards" array to an empty array
      flippedCards = [];

      // check how many cards are left
      const remainingCards = document.querySelectorAll(
        '.card:not([style="display: none;"])'
      );
      if (remainingCards.length === 6) {
        // change the background gradient
        document.body.style.background = "linear-gradient(180deg, rgba(228,198,132,1) 0%, rgba(0,106,171,1) 77%)";
      }
      if (remainingCards.length === 2) {
        // change the background gradient
        document.body.style.background = "linear-gradient(180deg, rgba(124,185,242,1) 0%, rgba(0,106,171,1) 77%)";
      }
      if (remainingCards.length === 0) {
        // display the alert message
        alert("Congrats! You found all the fish!");
      }
    }, 1000);
  }
}

// add a click event listener to each card that runs the new "flipCard" function when clicked
cards.forEach((card) => card.addEventListener("click", flipCard));