
//USE of DEPENDENCY INJECTION framework(DI)

function AppCategoriesController(CategoriesService,$http,$scope) {
    console.log('Running AppCategoriesController controller');
    var vm = this;

    vm.gridOptions = { 
        enableRowSelection: true, 
        enableRowHeaderSelection: false,
        enableColumnMenus: false,
        enableRowSelection :true,
        enableColumnResizing : true
    };

    vm.gridOptions.columnDefs = [
        { name: 'id', width: 50 },
        { name: 'brand', width: 200 },
        { name: 'model', width: 200},
        { name: 'price', width: 200 },
        {
            field: 'id',
            displayName: 'Options',
            enableCellEdit: false,
            cellTemplate: '<div class="container ngCellText"><a ng-click="grid.appScope.deleteCategorie(COL_FIELD)" class="glyphicon glyphicon-remove red"></a><a ng-click="grid.appScope.updateCategory(COL_FIELD)" class="glyphicon glyphicon-pencil red"></a></div>'
        }
    ];

    vm.gridOptions.multiSelect = false;
    vm.gridOptions.modifierKeysToMultiSelect = false;
    vm.gridOptions.noUnselect = true;
    vm.gridOptions.onRegisterApi = function( data ) {
    vm.gridApi = data;
   
    $init();
    
  };
 

    $init = function(){
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
                $init();

            }).catch(function(error){
                console.log('Error found:', error);
                vm.error = 'Cannot find categories';
            }).finally(function(){
                console.log('get categories has been finished');
            });
            console.log('test async');  
    };

     $scope.updateCategory = function(id) {
            alert('update '+id);
          };
}

var component = {
    templateUrl: 'main/categories/categories.html',
    controller: AppCategoriesController
};

angular
    .module('main')
    .component('appCategories', component);
