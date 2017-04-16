
//USE of DEPENDENCY INJECTION framework(DI)

function AppCategoriesController(CategoriesService) {
    console.log('Running AppCategoriesController controller');
    var vm = this;
    vm.categories = [];

    var promise = CategoriesService.getCategories();
    promise.then(function(result){
        console.log('result', result);
        vm.categories = result;
        
    }).catch(function(error){
        console.log('Error found:', error);
        vm.error = 'Cannot find categories';
    }).finally(function(){
        console.log('get categories has been finished');
    });

    console.log('test async');
}

var component = {
    templateUrl: 'main/categories/categories.html',
    controller: AppCategoriesController
};

angular
    .module('main')
    .component('appCategories', component);
