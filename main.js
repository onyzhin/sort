(function () {

  var app = angular.module('sortApp', []);

  app.controller('sortCtrl', ['$scope', '$filter', function ($scope, $filter) {

    $scope.list = [
      ["akm", 90, "hey", "bom", 98, 01, 5, "ef,", "bam"],
      [2, 5, 94, 7, 18, 3]
    ];


    $scope.reverse =  true;

    $scope.sort = function(listToSort){
      orderBy = $filter('orderBy');
      $scope.list[listToSort] = orderBy($scope.list[listToSort], '', $scope.reverse);
      console.log($scope.list[listToSort]);
      $scope.reverse = !$scope.reverse;
    }

  }]); 


}) ();
  
/*docs
https://docs.angularjs.org/api/ng/filter/orderBy
http://stackoverflow.com/questions/26416278/angularjs-orderby-with-array-of-arrays-and-separate-keys
*/