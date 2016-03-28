(function () {

  var app = angular.module('sortApp', []);

  app.controller('sortCtrl', ['$scope', '$filter', function ($scope, $filter) {

    $scope.list = [
      ["93", 90, "hey", "bom", 98, 01, 5, "ef", "bam"],
      [12, 5, 94, 7, 2, 18, 3]
    ];


    $scope.reverse =  true;

    $scope.sortFilter = function(listToSort){
      orderBy = $filter('orderBy');
      $scope.list[listToSort] = orderBy($scope.list[listToSort], '', $scope.reverse);
      console.log($scope.list[listToSort]);
      $scope.reverse = !$scope.reverse;
    }

    $scope.sortFunc = function(listToSort){
      $scope.list[listToSort].sort(function(a,b){
        return a-b;
      }); 
    }

    //gри каждом проходе алгоритма по внутреннему циклу, наибольший элемент массива ставится на своё место в конце массива
    $scope.sortBubble  = function(listToSort){
      var tempArray = $scope.list[listToSort];
      var length = tempArray.length-1;
      for (var i=0; i<length; i++){
        for (var j=0; j<length; j++){
          if (tempArray[j]>tempArray[j+1]){
            var temp = tempArray[j];
            tempArray[j] = tempArray[j+1];
            tempArray[j+1] = temp;
          }
        }
      }
    }

  }]); 


}) ();
  
/*docs
https://docs.angularjs.org/api/ng/filter/orderBy
http://stackoverflow.com/questions/26416278/angularjs-orderby-with-array-of-arrays-and-separate-keys
*/