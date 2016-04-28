"use strict";

var CarLot = (function (anything) {
  var inputEl = document.getElementById('userInput');
  var clickedEl = document.getElementsByClassName('clicked');

  anything.activateEvents = function() {
  // affect border
  var carCards = document.getElementsByClassName('carCards');
  for (let i = 0; i < carCards.length; i++) {
    carCards[i].addEventListener("click", function(e) {
      //remove other clicked elements
      CarLot.resetCard(carCards);
      //add styling to clicked element
      e.target.closest("article").classList.add("clicked");
      CarLot.changeCard(clickedEl, "lightgray");
      // focus on input on card click
      inputEl.value = "";
      inputEl.focus();
    });
  };
}
  // when user begins typing in the input box, bio is mirrored to input
  inputEl.addEventListener("keyup", function(e) {
    var clicked = clickedEl[0].children[2].children[0]; 
    clicked.innerHTML = e.target.value;
  });

  return anything;

})( CarLot || {} );
