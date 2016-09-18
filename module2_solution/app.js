(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  this.getToBuyItems = function () {
    return ShoppingListCheckOffService.getToBuyItems();
  }

  this.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  this.getBoughtItems = function () {
    return ShoppingListCheckOffService.getBoughtItems();
  };
}

function ShoppingListCheckOffService() {
  var ToBuyItems = [
    { name: "Cookies", quantity: 10 },
    { name: "Chips", quantity: 2 },
    { name: "Ice Cream", quantity: 3 },
    { name: "TV", quantity: 1 },
    { name: "Watches", quantity: 4 },
  ];
  var BoughtItems = [];

  this.getToBuyItems = function () {
    return ToBuyItems;
  };

  this.getBoughtItems = function () {
    return BoughtItems;
  };

  this.buyItem = function (index) {
    var elem = ToBuyItems.splice(index, 1);
    BoughtItems.push(elem[0]);
  };
}

})();
