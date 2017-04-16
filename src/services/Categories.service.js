// Angular Style Guide

angular
    .module('main')
    .factory('CategoriesService', LoginService);

function LoginService($log, $q, $resource) {
    var resource = $resource('http://localhost:9000/categories');
    
    return {
        getCategories: getCategories
    };
  
    function getCategories() {
        $log.info('Running getCategories');
        var future = $q.defer();
        
        resource.query().$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }
}
