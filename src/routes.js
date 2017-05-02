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

    .state('list', {
      parent: 'app',
      url: 'list',
      component: 'appCategories'
    })

    .state('add', {
      parent: 'app',
      url: 'add',
      component: 'categorie'
    })

    .state('edit', {
      parent: 'app',
      url: 'edit/:id',
      component: 'categorie'
    });
}
