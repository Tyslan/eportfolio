angular
    .module('PortfolioApp')
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('orange')
        .warnPalette('red');
    });
