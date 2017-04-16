// Angular Style Guide

angular
    .module('main')
    .factory('LoginService', LoginService);

function LoginService($log, $q, $resource) {
    var resource = $resource('http://localhost:9000/users');
    
    return {
        getUsers: getUsers
    };
  
    function getUsers() {
        $log.info('Running getUsers');
        var future = $q.defer();
        
        resource.query().$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }
}
