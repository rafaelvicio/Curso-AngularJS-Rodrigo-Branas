angular.module('listaTelefonica').controller('CrtlApp', function($scope, $contatosAPI, $operadorasAPI) {
  $scope.app = "Lista telefonica";
  $scope.contatos = [];
  $scope.operadoras = [];

  var carregarContatos = function() {
    contatosAPI.getContatos().then(function (data){
     $scope.contatos = data;
   },function (error){
     $scope.mensagem = "Aconteceu algum problema" +  error;
   });
 };

 var carregarOperadoras = function(data) {
   operadorasAPI.getOperadoras().then(function (data){
    $scope.operadoras = data;
  },function (error){
    $scope.mensagem = "Aconteceu algum problema" +  data;
  });
};

  $scope.adicionarContato = function(contato) {
      contato.serial = "";
      contato.data = new Date();
      contatosAPI.saveContato().sucess(function(data){
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
