"use strict";

var CarLot = (function (anything) {
  anything.populatePage = function() {
  var carEl = document.getElementById('carElement');
  carEl.innerHTML = "";
  var carInventory = CarLot.getInventory();

  // Loop over the inventory and populate the page
  for (let i = 0; i < carInventory.cars.length; i++) {
    var currentCar = carInventory.cars[i];
    let carCard = buildCard(currentCar, i);
    let cardDiv = document.createElement('div');
    cardDiv.innerHTML = (carCard);
    carEl.appendChild(cardDiv); //adds div to dom while maintaining event listeners
    let card = document.getElementById('card--${index}');
  }
  
CarLot.activateEvents();


function buildCard (currentCar, i) {
    var fillCard = "";

    // create individual ids in DOM for articles
    fillCard += '<article class="carCards col-md-4" id="currentCard' + i + '" style="border: 2px solid ' + currentCar.color + '"><h3>' + currentCar.year + ' ' +  currentCar.make + ' ' + currentCar.model + '</h3><section><p>' + currentCar.color + '</p><p>$' + currentCar.price + '</p></section><section class="description"><p>' + currentCar.description + '</p></section><footer>' + "Available" + '</footer></article>';

    return fillCard;
    }

}


CarLot.loadInventory();
return anything;

}( CarLot || {} ));
