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
      component: 'app',
      redirectTo: 'list'

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

    .state('main', {
      url: '/main',
      templateUrl: 'main/main.html',
      controller: 'MainController',
      controllerAs: 'vmMain'
    });
}
