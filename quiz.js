"use strict";

var carEl = document.getElementById('carElement');

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var inventory = JSON.parse(this.responseText);
  for (let i = 0; i < inventory.cars.length; i++) {
    let currentCar = inventory.cars[i];
    carEl.innerHTML += '<article class="carCards"><header>' + inventory[i].make + ', ' + inventory[i].model + '</header><section><p>' + inventory[i].year + '</p><p>' + inventory[i].price + '</p></section><section class="description"><p>' + inventory[i].description + '</p></section>';
  };

  // Now that the DOM is loaded, establish all the event listeners needed
  
  CarLot.activateEvents();
}


// Load the inventory and send a callback function to be invoked after the process is complete
function loadInventory() {
  let inventoryImport = new XMLHttpRequest();
  inventoryImport.addEventListener('load', populatePage);
  inventoryImport.open("GET", "inventory.json");
  inventoryImport.send();
};

// CarLot.loadInventory();