
function EditCategorie(CategoriesService,$location) {
    var vm = this;

    vm.categorie = {
        id:  $location.search().id,
        brand:  $location.search().brand,
        model:  $location.search().model,
        price:  $location.search().price,
        date:  $location.search().date
    };

    console.log('Running AppCategoriesController controller');

    vm.update = function() {
        var promise = 
        CategoriesService.editCategorie(vm.categorie);
        promise.then(function(result){
            console.log('update Categorie', result);
        });
    };

    vm.delete = function() {
        var promise = 
        CategoriesService.deleteCategorie(vm.categorie);
        promise.then(function(result){
            console.log('update Categorie', result);
        });
    };
    
       vm.add = function() {
        var promise = 
        CategoriesService.addCategorie(vm.categorie);
        promise.then(function(result){
            console.log('update Categorie', result);
        });
    };

    vm.cancel = function() {
       $location.path("/categories");
    };
}

var component = {
    templateUrl: 'main/categories/edit-categorie/edit-categorie.html',
    controller: EditCategorie
};

angular
    .module('main')
    .component('editCategorie', component);