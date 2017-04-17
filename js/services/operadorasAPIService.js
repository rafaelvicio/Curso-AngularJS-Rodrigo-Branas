angular.module("listaTelefonica").service("operadorasAPI", function ($http){
  this.getOperadoras = function() {
    $http({
      method: 'GET',
      url: 'localhost:3000/api/operadoras'
   });
 };
});
