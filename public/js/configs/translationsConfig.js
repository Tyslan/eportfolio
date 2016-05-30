angular
    .module('PortfolioApp')
    .config(translationConfig);

function translationConfig($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: '/translations/locale-',
    suffix: '.json'
  });

  $translateProvider
    .useSanitizeValueStrategy('sanitizeParameters')
    .preferredLanguage('nl');
}
