"use strict";

var CarLot = (function (anything) {
  var btn = document.getElementById('uselessBtn');

  anything.resetCard = function() {
    btn.addEventListener('click', function(e){
      event.preventDefault();
      var clickedCards = document.getElementsByClassName('clicked');
      clickedCards[0].classList.remove('clicked');
    })
  };

  CarLot.resetCard();

  
  // anything.changeCard = function(clickedCar, color) {

  // };

  return anything;
}( CarLot || {} ));