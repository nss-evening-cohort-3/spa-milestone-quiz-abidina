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
    fillCard += '<article class="carCards"><header>' + currentCar.make + ', ' + currentCar.model + '</header><section><p>' + currentCar.year + '</p><p>' + currentCar.price + '</p></section><section class="description"><p>' + currentCar.description + '</p></section><footer>' + currentCar.purchased + '</footer>';
     carEl.innerHTML += fillCard;
  };
  CarLot.activateEvents();
}

  // Now that the DOM is loaded, establish all the event listeners needed
  return anything;

}( CarLot || {} ));


// Load the inventory and send a callback function to be invoked after the process is complete

// CarLot.loadInventory(populatePage);