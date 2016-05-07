"use strict";

var CarLot = (function (anything) {
  anything.populatePage = function(carInventory) {
  var carEl = document.getElementById('carElement');
  carEl.innerHTML = "";
  var string = "";

  // Loop over the inventory and populate the page
  for (let i = 0; i < carInventory.cars.length; i++) {
    var currentCar = carInventory.cars[i];
    string += buildCard(currentCar, i);
    let card = document.getElementById('card--${index}');
  }

  carEl.innerHTML = string;
  
CarLot.activateEvents();


function buildCard (currentCar, i) {
    var fillCard = "";

    if (i % 3 === 0) {
      fillCard += '<div class="row-fluid">';
    }
    // create individual ids in DOM for articles
    fillCard += '<article class="carCards col-md-4" id="currentCard' + i + '" style="border: 2px solid ' + currentCar.color + '"><h3>' + currentCar.year + ' ' +  currentCar.make + ' ' + currentCar.model + '</h3><section><p>' + currentCar.color + '</p><p>$' + currentCar.price + '</p></section><section class="description"><p id="abtCar">' + currentCar.description + '</p></section><footer>' + "Available" + '</footer></article>';
    if ((i + 1) % 3 === 0) {
      fillCard += '</div>';
    }
    return fillCard;
    }
}


CarLot.loadInventory(anything.populatePage);

return anything;

})( CarLot || {} );
