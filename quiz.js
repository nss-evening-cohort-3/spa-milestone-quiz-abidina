"use strict";

var btn = document.getElementById('uselessBtn');

var CarLot = (function (anything) {
  anything.populatePage = function() {
  let carEl = document.getElementById('carElement');
  var carInventory = CarLot.getInventory();
  // Loop over the inventory and populate the page
  for (let i = 0; i < carInventory.cars.length; i++) {
    var currentCar = carInventory.cars[i];
    var fillCard = "";
    //create individual ids in DOM for articles
    fillCard += '<article class="carCards" id="currentCard' + i + '"><header>' + currentCar.make + ' ' + currentCar.model + '</header><section><p>' + currentCar.year + '</p><p>' + currentCar.price + '</p></section><section class="description"><p>' + currentCar.description + '</p></section><footer>' + "Available" + '</footer>';
     carEl.innerHTML += fillCard;
  };
  CarLot.activateEvents();
}

return anything;

}( CarLot || {} ));
