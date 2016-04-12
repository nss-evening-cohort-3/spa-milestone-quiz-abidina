"use strict";

var CarLot = (function (anything) {
  var btn = document.getElementById('uselessBtn');

  anything.resetCard = function() {
    btn.addEventListener('click', function(e){
      event.preventDefault();
      let clickedCard = document.getElementsByClassName('clicked');
      clickedCard[0].classList.remove('clicked'); // have to access it with index bc "getelementsbyclassname" creates an array
    })
  };

  CarLot.resetCard();


  anything.changeCard = function(clickedCar, color) {
    let clickedCard = document.getElementsByClassName('clicked');

  };

  //The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
    // 1. A car DOM element that was clicked on.
    // 1. A color name.

  return anything;
}( CarLot || {} ));