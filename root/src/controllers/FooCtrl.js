'use strict';

angular
  .module('{%= moduleName %}')
  .controller('{%= moduleName %}.FooCtrl', [

    '$scope',

    function($scope){

      $scope.foobar = 'Hello World!';

      $scope.bar = function(){

        return $scope.foobar;

      };

    }
  ]);
