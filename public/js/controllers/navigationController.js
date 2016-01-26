angular
    .module('PortfolioApp')
    .controller('NavigationController', NavController);

function NavController($translate){
  var vmNavigation = this;

  vmNavigation.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}
