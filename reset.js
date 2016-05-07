"use strict";

var CarLot = (function (anything) {
  var btn = document.getElementById('uselessBtn');

  anything.resetCard = function(carCards) {
    for (let i = 0; i < carCards.length; i++) {
      carCards[i].classList.remove("clicked");
      carCards[i].style.backgroundColor= "";
    };
  };


  anything.changeCard = function(clickedCard, colorName) {
    var clickedCard = document.getElementsByClassName('clicked');
    clickedCard[0].style.backgroundColor= colorName;
  };



  return anything;
})( CarLot || {} );