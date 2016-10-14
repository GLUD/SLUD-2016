(function(angular){
  'use strict';

  angular.module('SLUD', [])
  .controller('Menu', function MenuController(){
    this.lista = [
      {url: '#expositores', text: 'Expositores'},
      {url: '#agenda', text: 'Agenda'},
      {url: '#ubicacion', text: 'Ubicación'},
      {url: '#patrocinadores', text: 'Patrocinadores'},
      {url: '#hackathon', text: 'Hackathon'},
    ];
  })
  .controller('Hackathon', ['$http' , function Hackathon($http){
    // Obtener los expositores del API
    $http.get('https://goo.gl/forms/r89qOijGkQuRJBCN2')
      .success(data => {
        this.lista = data;
      })
  }])
  .controller('Expositores', ['$http' , function Expositores($http){
    // Obtener los expositores del API
    $http.get('https://slud.pythonanywhere.com/api/speakers/')
      .success(data => {
        this.lista = data;
      })
  }])
  .controller('Agenda', ['$http', function Agenda($http){
    // Consultar las charlas del API
    $http.get('https://slud.pythonanywhere.com/api/charlas/')
      .success(data => {
        this.dias = util.procesarCharlas(data);
      });
  }]);
})(window.angular);
