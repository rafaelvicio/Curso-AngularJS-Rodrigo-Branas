angular.module("listaTelefonica").factory("contatosAPI", function($http){

  var _getContatos = function() {
    return $http.get("localhost:3000/api/contatos");
  };

  var _saveContato = function(contato) {
    return $http.post("localhost:3000/api/contatos", contato);
  };


  return {
    getContatos: _getContatos,
    saveContato: _saveContato
  };
});
