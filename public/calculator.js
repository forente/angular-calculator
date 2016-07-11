var app = angular.module('cal',[]);

app.controller('screen', function ($scope){

  $scope.display = "";
  $scope.appendVal = function(val){
    $scope.display+=val;
    console.log($scope.display);
  }
});
