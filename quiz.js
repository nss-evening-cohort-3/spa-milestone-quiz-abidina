"use strict";

var btn = document.getElementById('uselessBtn');

var CarLot = (function (anything) {
  anything.populatePage = function() {
  var carEl = document.getElementById('carElement');
  var carInventory = CarLot.getInventory();

  // Loop over the inventory and populate the page
  for (let i = 0; i < carInventory.cars.length; i++) {
    var currentCar = carInventory.cars[i];
    let carCard = buildCard(carInventory.cars, [i]);
    let cardDiv = document.createElement('div');
    cardDiv.innerHTML = (carCard);
    carEl.appendChild(cardDiv);
    let card = document.getElementById('card--${index}');
    addClickEvent(card);

  CarLot.activateEvents();
}

function addClickEvent(card) {
  card.addEventListener("click", function(){
    console.log("howdy!"); // Just a test to see if all cards get the click event added
  });
}

function buildCard (arg1, arg2) {
    var fillCard = "";

    // create individual ids in DOM for articles
    fillCard += '<article class="carCards col-md-4" id="currentCard' + i + '" style="border: 2px solid' + currentCar.color + '"><header>' + currentCar.make + ' ' + currentCar.model + '</header><section><p>' + currentCar.year + ', ' + currentCar.color + '</p><p>' + currentCar.price + '</p></section><section class="description"><p>' + currentCar.description + '</p></section><footer>' + "Available" + '</footer></article>';

    return fillCard;
      // carEl.innerHTML += fillCard;
    }





  // add border that matches car color (currently only adding silver borders)
  //   var carBrdr = document.getElementsByClassName("carCards");

  //   for (let i = 0; i < carBrdr.length; i++) {
  //     console.log(currentCar.color); 
  //     carBrdr[i].style.borderColor=currentCar.color;
  //   };
  // };

 
    // function buildCard (car, index) {
    //   // build string to create single card
    //   var card = "",
    //       card_wrapper = '<section id ="card--${index}" class="card-wrapper" style="2px solid ${car.color}">',
    //       card_title = '<h3>${car.year} ${car.make} ${car.model}</h3>',
    //       card_price = '<div class="car-price">$${car.price}</div>',
    //       // card_image = '<div class="card-img style="background-image: url('images/${car.image}')"></div>',
    //       card_sold = car.purchased ? '<span class="card-sold">SOLD!</span>' : "",
    //       card_copy = '<p class="card-copy">${car.description}</p>';

    //     //concatenate card contents
    //     card += '${card_wrapper + card_title + card_price + card_sold + card_copy}</section>';
    //     return card;
    // };


}

return anything;
CarLot.loadInventory();

}( CarLot || {} ));
