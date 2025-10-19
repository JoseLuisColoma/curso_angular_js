let app = angular.module('MyFirstApp', []);

app.controller('HolaController', function($scope) {
  $scope.nombre = "Jose Luis";
});

app.controller('AdiosController', function($scope) {
  $scope.nombre = "Adios Mundo";
});


// MVMM - Modelo Vista Modelo de Modelo
// $scope - es el modelo
// HTML - es la vista
// Controller - es el modelo de la vista