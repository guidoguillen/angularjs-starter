angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'main',
      redirectTo: 'login'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller: 'LoginController',
      controllerAs: 'vmLogin'
    })

    .state('categories', {
      parent: 'app',
      url: 'categories',
      component: 'appCategories'
    })

    .state('edit', {
      parent: 'app',
      url: 'edit',
      component: 'editCategorie'
    });
}
