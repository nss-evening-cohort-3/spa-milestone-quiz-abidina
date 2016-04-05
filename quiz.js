"use strict";

var btn = document.getElementById('uselessBtn');

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
    carEl.appendChild(cardDiv);
    let card = document.getElementById('card--${index}');
  }
  
CarLot.activateEvents();


function buildCard (currentCar, i) {
    var fillCard = "";

    // create individual ids in DOM for articles
    fillCard += '<article class="carCards col-md-4" id="currentCard' + i + '" style="border: 2px solid ' + currentCar.color + '"><header>' + currentCar.make + ' ' + currentCar.model + '</header><section><p>' + currentCar.year + ', ' + currentCar.color + '</p><p>' + currentCar.price + '</p></section><section class="description"><p>' + currentCar.description + '</p></section><footer>' + "Available" + '</footer></article>';
console.log(fillCard);
    return fillCard;
      // carEl.innerHTML += fillCard;
    }

}


CarLot.loadInventory();
return anything;

}( CarLot || {} ));
