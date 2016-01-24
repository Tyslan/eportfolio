// public/js/appRoutes.js
angular
    .module('PortfolioApp')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider

            // home page
            .state('home', {
                url: '/home',
                templateUrl: '/views/home.html'
            });

        $urlRouterProvider.otherwise('home');
        $locationProvider.html5Mode(true);

    }]);
