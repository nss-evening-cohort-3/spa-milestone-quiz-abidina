"use strict";

var CarLot = (function (populatePage) {
  var inventory = [];
  return {
    loadInventory: function (callback) {
      var inventoryImport = new XMLHttpRequest();
      inventoryImport.addEventListener('load', populatePage);
      inventoryImport.open("GET", "inventory.json");
      inventoryImport.send();

      inventoryImport.addEventListener("load", function() {
        var data = JSON.parse(this.responseText);
        // fillInventory(data);
        callback(inventory); // calls populatePage function bc that function was passed to 'loadInventory'
      });
    }
  }
}( CarLot || {} ));