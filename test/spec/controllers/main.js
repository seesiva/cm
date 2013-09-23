'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cmApp'));
beforeEach(module('ui.bootstrap'));
  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope for HomePage', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
    it('should attach a list of aboutMeItems to the scope for About Us Page', function () {
    expect(scope.aboutMeItems.length).toBe(3);
        });
    it('should attach a list of contactItems to the scope for Contact Me Page', function () {
    expect(scope.contactItems.length).toBe(4);
  });

});
