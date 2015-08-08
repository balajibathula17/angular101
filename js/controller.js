angular.module("default-module", [])
    .controller('listController', function($scope) {
        $scope.items = [1,2,3,4,5,6,7,8,9,10];
    })
    .directive('numerosImpares', function(){
        return {
            restrict: 'E',
            templateUrl: 'template.html',
            controller: 'listController'
        }
    });


