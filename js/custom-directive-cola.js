angular.module('default-module', [])
    .controller('listaController', function($scope) {
        console.info($scope);
    }).directive('pi', function() {
        return {
            restrict: 'E',
            controller: 'listaController',
            templateUrl: 'template.html',
            scope: {
                items: '=listaPi'
            }
        }
    });