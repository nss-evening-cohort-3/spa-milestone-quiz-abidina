"use strict";

var CarLot = (function (anything) {
  var inventory = [];
    anything.getInventory = function () {
      return inventory;
    };
    anything.loadInventory = function (callback) {
      var inventoryImport = new XMLHttpRequest();
      inventoryImport.open("GET", "inventory.json");
      inventoryImport.send();
      inventoryImport.addEventListener("load", function() {
        var data = JSON.parse(this.responseText);
        inventory = data;
        CarLot.populatePage();
      });
      }
      return anything;
}( CarLot || {} ));

CarLot.loadInventory();