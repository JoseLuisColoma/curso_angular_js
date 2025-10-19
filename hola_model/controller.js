let app = angular.module('MyFirstApp', []);
app.controller('HolaController', function($scope) {
  $scope.nombre = "Jose Luis";
  $scope.nuevoComentario = "";
  $scope.nuevoTexto = "";

  $scope.comentarios = [
    { comentario: "Comentario 1",
      autor: "Jose Luis",
      fecha: new Date(),
      texto: "Este es un comentario"
    },
    { comentario: "Comentario 2",
      autor: "Ana",
      fecha: new Date(),
      texto: "Este es otro comentario"
    },
    { comentario: "Comentario 3",
      autor: "Luis",
      fecha: new Date(),
      texto: "Este es un tercer comentario"
    }
  ];
  $scope.agregarComentario = function() {
    if ($scope.nuevoComentario) {
      $scope.comentarios.push({
        comentario: $scope.nuevoComentario,
        autor: $scope.nombre,
        fecha: new Date(),
        texto: $scope.nuevoTexto,
        likes: 0
      });
      $scope.nuevoComentario = "";
      $scope.nuevoTexto = "";
    }
  };
});

app.controller('AdiosController', function($scope) {
  $scope.nombre = "Adios Mundo";
});


// MVMM - Modelo Vista Modelo de Modelo
// $scope - es el modelo
// HTML - es la vista
// Controller - es el modelo de la vista