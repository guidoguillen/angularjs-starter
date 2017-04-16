describe('main component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('app', function () {
      return {
        templateUrl: 'main/main.html'
      };
    });
  }));
  it('should render main page', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    var h1 = element.find('h1');
    expect(h1.html()).toEqual('');
  }));
});
