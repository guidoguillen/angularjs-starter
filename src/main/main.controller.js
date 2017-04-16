function MainController($log) {
    $log.debug('MainController', 'running');
    var vm = this;
}

angular.module('main')
.controller('MainController', MainController);