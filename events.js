"use strict";

// addClickEvent(carCards);

// adds dotted border to container regardless of where you click inside the container -- adds dotted border
carCards.addEventListener("click", function(e) {
  for (var i = 0; i < inventory.cars.length; i++) {
    carCards[i].classList.remove("clicked");
  }
  e.target.closest("article").classList.add("clicked");
});

carCards.addEventListener("click", function(e) {
  inputEl.value = "";
  inputEl.focus();
});
// when user begins typing in the input box, bio is mirrored to input
inputEl.addEventListener("keyup", function(e) {
  // var clicked = clickedEl[0].children[1].children[0];
  clicked.innerHTML = e.target.value;
});