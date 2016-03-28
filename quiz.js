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
    fillCard += '<article class="carCards col-md-4" id="currentCard' + i + '"><header>' + currentCar.make + ' ' + currentCar.model + '</header><section><p>' + currentCar.year + ', ' + currentCar.color + '</p><p>' + currentCar.price + '</p></section><section class="description"><p>' + currentCar.description + '</p></section><footer>' + "Available" + '</footer></article>';

    carEl.innerHTML += fillCard;

    //add border that matches car color (currently only adding silver borders)
    var carBrdr = document.getElementsByClassName("carCards");

    for (let i = 0; i < carBrdr.length; i++) {
      console.log(currentCar.color); 
      carBrdr[i].style.borderColor=currentCar.color;
    };
  };

 


  CarLot.activateEvents();
}

return anything;
CarLot.loadInventory();

}( CarLot || {} ));
