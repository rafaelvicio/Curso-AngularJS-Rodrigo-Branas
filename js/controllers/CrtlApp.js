angular.module('listaTelefonica').controller('CrtlApp', function($scope, $http) {
  $scope.app = "Lista telefonica";
  $scope.contatos = [];
  $scope.operadoras = [];

  var carregarContatos = function() {
    $http({
      method: 'GET',
      url: 'localhost:3000/api/contatos'
   }).then(function (data){
     $scope.contatos = data;
   },function (error){
     $scope.mensagem = "Aconteceu algum problema" +  error;
   });
 };

 var carregarOperadoras = function(data) {
   $http({
     method: 'GET',
     url: 'localhost:3000/api/operadoras'
  }).then(function (data){
    $scope.operadoras = data;
  },function (error){
    $scope.mensagem = "Aconteceu algum problema" +  data;
  });
};

  $scope.adicionarContato = function(contato) {
    $http.post("localhost:3000/contatos", contato)
      .sucess(function(data){
        delete $scope.	contato;
        $scope.contatoForm.$setPristine();
        carregarContatos();
      });

  };

  $scope.removerContato = function(contatos) {
    $scope.contatos = contatos.filter(function(contato) {
      if(!contato.selecionado) {
        return contato;
      }
    });
  };

  $scope.isChecado = function(contatos) {
    return contatos.some(function(contato) {
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function(campo){
     $scope.criterioDeOrdenacao = campo;
     $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  carregarContatos();
  carregarOperadoras();

});
