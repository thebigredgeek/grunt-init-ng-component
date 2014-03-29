'use strict';

angular
  .module('{%= moduleName %}')
  .directive('fooRoot', [


    function(){

      return {

        restrict: 'A',
        scope: true,
        templateUrl: '{%= fileName %}/views/FooView.html',
        controller: '{%= moduleName %}.FooCtrl',
        link: function(){}

      };

    }

  ]);
