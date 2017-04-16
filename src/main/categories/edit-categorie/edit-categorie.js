
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
             $location.path("/categories");
        });
    };
    
    vm.add = function() {
        var promise = 
        CategoriesService.addCategorie(vm.categorie);
        promise.then(function(result){
            console.log('update Categorie', result);
             $location.path("/categories");
        });
    };

    vm.getCategorieById = function(id) {
        var promise = CategoriesService.getCategorieById(id);
        promise.then(function(result){
        vm.categorie = result;
            
        }).catch(function(error){
            console.log('Error found:', error);
            vm.error = 'Cannot find categories';
        }).finally(function(){
            console.log('get categories has been finished');
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