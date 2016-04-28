"use strict";

var CarLot = (function (anything) {
  var inventory = [];
    anything.getInventory = function () {
      return inventory;
    };
    anything.loadInventory = function (populatePage) {
      // populatePage is passed in from quiz.js (callback)
      var inventoryImport = new XMLHttpRequest();
      inventoryImport.open("GET", "inventory.json");
      inventoryImport.send();
      inventoryImport.addEventListener("load", function() {
        var data = JSON.parse(this.responseText);
        inventory = data;
        populatePage(inventory);
      });
      }
      return anything;
})( CarLot || {} );