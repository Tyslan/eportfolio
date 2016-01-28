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
        })
        .state('portfolio', {
          url: '/portfolio',
          templateUrl: '/views/portfolio.html'
        })
        .state('hobbies', {
          url: '/hobbies',
          templateUrl: 'views/hobbies.html'
        });

      $urlRouterProvider.otherwise('home');
      $locationProvider.html5Mode(true);
    }]);
