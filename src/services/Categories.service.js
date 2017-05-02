// Angular Style Guide

angular
    .module('main')
    .factory('CategoriesService', LoginService);

function LoginService($log, $q, $resource) {
    var resource = $resource('http://localhost:9000/categories/:id', {
        id: '@id'}, 
        {
            update: {
                method: 'PUT'
            }
        });

    return {
        getCategories: getCategories,
        editCategorie:editCategorie,
        deleteCategorie:deleteCategorie,
        addCategorie:addCategorie,
        getCategorieById:getCategorieById
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

    function getCategorieById(id) {
        $log.info('Running getCategorieById by id');
        var future = $q.defer();
        
        resource.get({id: id}).$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }

    function editCategorie(categorie) {
        var future = $q.defer();      
        resource.update(categorie).$promise.then(function(result){
            future.resolve(result);
        }).catch(function(error){
            future.reject(error);
        });

        return future.promise;
    }

    function deleteCategorie(id) {
        var future = $q.defer();
        
        resource.delete({id: id}).$promise.then(function(result){
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
