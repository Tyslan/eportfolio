angular
  .module('PortfolioApp')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/views/home.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: '/views/about.html'
        });

      $urlRouterProvider.otherwise('home');
      $locationProvider.html5Mode(true);
    }]);
