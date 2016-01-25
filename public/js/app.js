// public/js/app.js
angular
  .module('PortfolioApp', ['ui.router', 'ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('blue')
      .primaryPalette('pink')
      .accentPalette('orange');
    });
