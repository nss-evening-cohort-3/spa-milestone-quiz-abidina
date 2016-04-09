"use strict";

var CarLot = (function (anything) {
  var btn = document.getElementById('uselessBtn');

  anything.resetCard = function() {
    btn.addEventListener('click', function(e){
      article.classList.remove('clicked');
    })
  };

  // anything.changeCard = function(clickedCar, color) {

  // };
}( CarLot || {} ));