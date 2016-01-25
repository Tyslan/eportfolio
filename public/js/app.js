// public/js/app.js
angular
  .module('PortfolioApp', ['ui.router', 'ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('orange')
      .warnPalette('red');
  });
