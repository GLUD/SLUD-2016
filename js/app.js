(function(angular){
  'use strict';
   
  angular.module('SLUD', [])
  .constant('CONFIG', {
      'APP_NAME' : 'SLUD fontend',
      'APP_VERSION' : '0.1.0',
      'BASE_URL' : '',
      'API_URL' : 'https://sludapi.glud.org',
      'SYSTEM_LANGUAGE' : 'S'
  })
  .controller('Menu', function MenuController(){
    this.lista = [
      {url: '#descripcion', text: 'Inicio'},
      {url: '#expositores', text: 'Expositores'},
      {url: '#agenda', text: 'Agenda'},
      {url: '#ubicacion', text: 'Ubicación'},
      {url: '#patrocinadores', text: 'Patrocinadores'},
    ];
  })
  .controller('Expositores', ['$http' , 'CONFIG', function Expositores($http, CONFIG){
    // Obtener los expositores del API
    // $http.get(CONFIG.API_URL + '/api/speakers/')
    //   .success(data => {
    //     this.lista = data;
    //   })
    this.lista = [
      {
        nombre: 'U. Distrital',
        trabajo: 'La Distri',
        foto: 'img/EscudoUD.png'
      },
      {
        nombre: 'U. Distrital',
        trabajo: 'La Distri',
        foto: 'img/EscudoUD.png'
      },
      {
        nombre: 'U. Distrital',
        trabajo: 'La Distri',
        foto: 'img/EscudoUD.png'
      },
      {
        nombre: 'U. Distrital',
        trabajo: 'La Distri',
        foto: 'img/EscudoUD.png'
      }
    ]
  }])
  .controller('Agenda', ['$http', 'CONFIG', function Agenda($http, CONFIG){
    // Consultar las charlas del API
    // $http.get(CONFIG.API_URL + '/api/charlas/')
    //   .success(data => {
    //     this.dias = util.procesarCharlas(data);
    //   });
    this.dias = [
      {
        header: 'Lunes 16',
        charlas: [
          {
            hora: '14:00',
            nombre: 'Hackeando Atom',
            expositor: 'David Castelblanco',
            lugar: 'Sabio Caldas'
          }
        ]
      }
    ]
  }]);
})(window.angular);
