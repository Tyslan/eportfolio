angular
    .module('PortfolioApp')
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('orange')
        .warnPalette('red');
    });
