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
        })
        .state('contact',{
          url: '/contact',
          templateUrl: 'views/contact.html',
          controller: 'ContactController',
          controllerAs: 'vmContact'
        });

      $urlRouterProvider.otherwise('home');
      $locationProvider.html5Mode(true);
    }]);
