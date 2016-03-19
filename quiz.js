"use strict";

var inputEl = document.getElementById('form-control');
var btn = document.getElementById('uselessBtn');

function populatePage (inventory) {
  let carEl = document.getElementById('carElement');

  // Loop over the inventory and populate the page
  for (let i = 0; i < inventory.cars.length; i++) {
    var currentCar = inventory.cars[i];
    var fillCard = "";
    fillCard += '<article class="carCards"><header>' + currentCar.make + ', ' + currentCar.model + '</header><section><p>' + currentCar.year + '</p><p>' + currentCar.price + '</p></section><section class="description"><p>' + currentCar.description + '</p></section><footer>' + currentCar.purchased + '</footer>';
     carEl.innerHTML = fillCard;
  };


  // Now that the DOM is loaded, establish all the event listeners needed
  
  CarLot.activateEvents();
}( CarLot || {} );


// Load the inventory and send a callback function to be invoked after the process is complete

CarLot.loadInventory(populatePage);