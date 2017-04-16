// Angular Style Guide

angular
    .module('main')
    .factory('CategoriesService', LoginService);

function LoginService($log, $q, $resource) {
    var resource = $resource('http://localhost:9000/categories');

    return {
        getCategories: getCategories,
        editCategorie:editCategorie,
        deleteCategorie:deleteCategorie,
        addCategorie:addCategorie
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

    function editCategorie(categorie) {
        var future = $q.defer();
        
        resource.put(categorie).$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }

    function deleteCategorie(categorie) {
        var future = $q.defer();
        
        var resourceDelete = $resource('http://localhost:9000/categories/'+categorie.id);

        resourceDelete.delete(categorie).$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }

    function addCategorie(categorie) {
        var future = $q.defer();
        
        resource.save(categorie).$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }
}
