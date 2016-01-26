angular
    .module('PortfolioApp')
    .config(translationConfig);

function translationConfig($translateProvider) {
    $translateProvider
        .useSanitizeValueStrategy('sanitize')
        .translations('nl', translationsNL)
        .translations('en', translationsEN)
        .translations('fr', translationsFr)
        .preferredLanguage('nl')
        .fallbackLanguage('en');
}
