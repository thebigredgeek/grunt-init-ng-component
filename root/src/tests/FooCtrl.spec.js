'use strict';

describe('Controller {%= moduleName %}.FooCtrl', function(){

  var scope;

  beforeEach(function(){

    module('{%= moduleName %}');

    inject([

      '$rootScope',
      '$controller',

      function($rootScope, $controller){

        scope = $rootScope.$new();

        $controller('{%= moduleName %}.FooCtrl',{
          $scope: scope
        });

      }

    ]);

  });

  describe('Method Bar', function(){

    it('should return the value of scope.foobar', function(){

      scope.foobar = 'Hello World';

      expect(scope.bar()).toEqual('Hello World');

    });

  });

});
