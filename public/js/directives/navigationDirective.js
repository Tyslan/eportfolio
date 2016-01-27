angular
  .module('PortfolioApp')
  .directive('navbar', function () {
    return {
      restrict: 'E',
        templateUrl: '../../../views/navbar.html',
        controller: 'NavigationController',
        controllerAs: 'vmNavigation'
    };
  });
