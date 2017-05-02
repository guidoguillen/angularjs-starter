
function Categorie(CategoriesService,$state,$stateParams,$location) {
    var vm = this;
    vm.title = 'Create';
    vm.categorie;

    vm.getCategorieById = getCategorieById;
    vm.update = update;
    vm.cancel = cancel;

    console.log('Running AppCategoriesController controller');

    if($stateParams.id !=null){
        vm.title = 'Edit';
        vm.categorie = vm.getCategorieById($stateParams.id);
    }

    vm.add = function() {
        var promise = CategoriesService.addCategorie(vm.categorie);
        promise.then(function(result){
             console.log('Create new categorie', result);
             $state.go('list');
        });
    };

    function getCategorieById (id){
        var promise = CategoriesService.getCategorieById(id);
        promise.then(function(result){
        return vm.categorie = result;
            
        }).catch(function(error){
            console.log('Error found:', error);
            vm.error = 'Cannot find categories';
        }).finally(function(){
            console.log('get categories has been finished');
        });
    }

    function update (categorie) {
        var promise = 
        CategoriesService.editCategorie(categorie);
        promise.then(function(result){
            console.log('update Categorie', result);
             $state.go('list');
        });
    };

    function cancel () {
        $state.go('list');
    }
}

var component = {
    templateUrl: 'main/categories/categorie/categorie.html',
    controller: Categorie
};

angular
    .module('main')
    .component('categorie', component);