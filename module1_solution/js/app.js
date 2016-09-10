(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', lunchCheck);

lunchCheck.$inject = ['$scope'];
function lunchCheck($scope) {
  $scope.csv = "";
  $scope.doCheck = function () {
    $scope.message = "";
    var values = $scope.csv;
    if (values.trim() == "") {
      $scope.message = "Please enter data first";
      return;
    } else {
      if (values.split(',').length < 4) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  };
}

})();
