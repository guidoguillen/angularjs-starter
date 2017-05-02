
//USE of DEPENDENCY INJECTION framework(DI)

function AppCategoriesController(CategoriesService,$http,$scope,$mdDialog,$location) {
    console.log('Running AppCategoriesController controller');
    var vm = this;

    vm.gridOptions = { 
        enableRowHeaderSelection: false,
        enableColumnMenus: true,
        enableRowSelection :true,
        enableColumnResizing : true,
        rowTemplate:'main/categories/rowTemplate.html'
    };

    vm.gridOptions.columnDefs = [
        { name: 'id', width: 50 },
        { name: 'brand', width: 200 },
        { name: 'model', width: 200},
        { name: 'price', width: 200, cellClass: 'grid-align-right' },
        { name: 'date', width: 200 },      
        {
            field: 'id',
            displayName: 'Options',
            enableCellEdit: false,
            cellTemplate: '<div class="container ngCellText"><a ng-click="grid.appScope.deleteCategorie(COL_FIELD)" class="glyphicon glyphicon-remove red"></a>&nbsp;&nbsp;&nbsp;<a ui-sref="edit({id: COL_FIELD})" class="glyphicon glyphicon-pencil red"></a></div>'   
        }
    ];

    vm.gridOptions.onRegisterApi = function( data  ) {
    vm.gridApi = data;
    loadCategories();
  };
 
   function loadCategories(){
        var promise = CategoriesService.getCategories();
        promise.then(function(result){
            console.log('result', result);
            vm.gridOptions.data = result;   
        }).catch(function(error){
            console.log('Error found:', error);
            vm.error = 'Cannot find categories';
        }).finally(function(){
            console.log('get categories has been finished');
        });
        console.log('test async');  
    }

    $scope.deleteCategorie = function(id) {
            var promise = CategoriesService.deleteCategorie(id);
            promise.then(function(result){
                console.log('result', result);
                loadCategories();
            }).catch(function(error){
                console.log('Error found:', error);
                vm.error = 'Cannot find categories';
            }).finally(function(){
                console.log('get categories has been finished');
            });
            console.log('test async');  
    }

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
}

var component = {
    templateUrl: 'main/categories/categories.html',
    controller: AppCategoriesController
};

angular
    .module('main')
    .component('appCategories', component);
