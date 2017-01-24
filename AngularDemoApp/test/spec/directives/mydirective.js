'use strict';

describe('Directive: myDirective', function () {

  // load the directive's module
  beforeEach(module('testApp'));
  //beforeEach(module('templates', 'directives'));

  var element,
    scope, $httpBackend, compiledElement, $el, elementHtml;

  beforeEach(inject(function ($rootScope, _$httpBackend_, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<my-directive></my-directive>');
    element = $compile(element)(scope);
    scope.$digest();

    elementHtml = element.html();
    $el = $('.item item-avatar');
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-directive empdata="employee" gotodetails="gotoDetailsPage(employee)"></my-directive>');
    element = $compile(element)(scope);
    
    expect(element).not.toBe(null);
    expect(element).not.toBe(undefined);
  }));

  it('should have the image parameter', function() {
     expect(elementHtml).toContain('<img');
    
  });

  it('should have the class item-avatar', function() {
    //console.log("image1211 = " + element.html());
    expect(elementHtml).toContain('class="item item-avatar"');
  });

  it('should have the value of record', function() {
    scope.record = {"firstName" : "Mike"};
    scope.$digest();
    console.log("elementHtml.find('p') = " + scope.record.firstName + " ====> " + element.find('p').text());
    expect(elementHtml).toContain('class="headerTxt ng-binding"');
    expect(element.find('p').text()).toEqual('Name : ');

  });
});
