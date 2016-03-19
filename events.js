"use strict";

var CarLot = (function (anything) {
  var inputEl = document.getElementById('userInput');
  var clickedEl = document.getElementsByClassName('clicked');

  anything.activateEvents = function() {
  // affect border
  var carCards = document.getElementsByClassName('carCards');
  console.log(carCards);
  for (let i = 0; i < carCards.length; i++) {
    carCards[i].addEventListener("click", function(e) {
      console.log("hi");
      for (let i = 0; i < CarLot.getInventory.length; i++) {
        carCards[i].classList.remove("clicked");
      };
      e.target.closest("article").classList.add("clicked");
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
}( CarLot || {} ));
