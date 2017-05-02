function LoginController($log,LoginService,$location,$sessionStorage) {
    $log.debug('LoginController', 'running');
    $sessionStorage.isLogged = null;

    var vm = this;
    vm.user = {
        userName: '',
        password: ''
    };

    vm.singIn=function(){
        vm.users = [];
        var promise = LoginService.getUsers();
        promise.then(function(result){
            vm.users = result;
            for (var i = 0; i < vm.users.length; i++) {
                userTmp = vm.users[i];
                if( (vm.user.userName == userTmp.userName) && (vm.user.password == userTmp.password)  && (userTmp.status == true))
                {
                    $sessionStorage.isLogged = vm.user.userName;
                    $location.path("/list");
                }
            }
        }).catch(function(error){
            console.log('Error found:', error);
            vm.error = 'Cannot find students';
        }).finally(function(){
            console.log('getStudents has been finished');
        });
    }
};

angular.module('login')
.controller('LoginController', LoginController);