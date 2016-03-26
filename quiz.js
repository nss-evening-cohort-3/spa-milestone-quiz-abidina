"use strict";

var btn = document.getElementById('uselessBtn');

var CarLot = (function (anything) {
  anything.populatePage = function() {
  let carEl = document.getElementById('carElement');
  var carInventory = CarLot.getInventory();
  // Loop over the inventory and populate the page
  for (var i = 0; i < carInventory.cars.length; i++) {
    var currentCar = carInventory.cars[i];
    var fillCard = "";
    //create individual ids in DOM for articles
    fillCard += '<article class="carCards col-md-4" id="currentCard' + i + '"><header>' + currentCar.make + ' ' + currentCar.model + '</header><section><p>' + currentCar.year + '</p><p>' + currentCar.price + '</p></section><section class="description"><p>' + currentCar.description + '</p></section><footer>' + "Available" + '</footer></article>';
     carEl.innerHTML += fillCard;
    };

    // vv doesn't grab anything vv (null)
  var carBrdr = document.getElementsByClassName("carCards")
  for (let i = 0; i < carBrdr.length; i++) {
      carBrdr[i].setAttribute("style", "border-color:currentCar.color");
  };


  CarLot.activateEvents();
}

return anything;
CarLot.loadInventory();

}( CarLot || {} ));
