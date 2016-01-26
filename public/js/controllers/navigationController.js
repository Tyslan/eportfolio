angular
    .module('PortfolioApp')
    .controller('NavigationController', NavController);

function NavController($translate){
  var vmNavigation = this;

  vmNavigation.changeLanguage = function (langKey) {
    console.log('Changed language to: ' + langKey);
    $translate.use(langKey);
  };
}
