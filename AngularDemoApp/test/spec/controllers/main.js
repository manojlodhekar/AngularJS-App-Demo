'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var MainCtrl;
  var scope;
  var backendService;
  var deferred;
  var $httpBackend;
  var myService;
  var q;
  var employees;
  var employeeDetails = [{
                        "firstName": "Mike",
                        "lastName": "Chepesky",
                        "companyName": "Accenture",
                        "image": "http://api.randomuser.me/portraits/med/women/39.jpg",
                        "address": "Pune",
                        "profile": "He is a good developer and good human being and good team player",
                        "age": "abc.pqr@xyz.com",
                        "employeeNumber": "01840192"
                      }, {
                        "firstName": "Westlee",
                        "lastName": "Barichak",
                        "companyName": "TCS",
                        "image": "http://api.randomuser.me/portraits/med/women/41.jpg",
                        "address": "Mumbai",
                        "profile": "He is a good developer and good human being and good team player",
                        "age": "abc.pqr@xyz.com",
                        "employeeNumber": "47901927"
                      }, {
                        "firstName": "Jamie",
                        "lastName": "Lambier",
                        "companyName": "Amdocs",
                        "image": "http://api.randomuser.me/portraits/med/women/31.jpg",
                        "address": "Ahamdabad",
                        "profile": "He is a good developer and good human being and good team player",
                        "age": "abc.pqr@xyz.com",
                        "employeeNumber": "51239657"
                      }, {
                        "firstName": "Denise",
                        "lastName": "Marshall",
                        "companyName": "Infosys",
                        "image": "http://api.randomuser.me/portraits/med/women/42.jpg",
                        "address": "Nagpur",
                        "profile": "He is a good developer and good human being and good team player",
                        "age": "abc.pqr@xyz.com",
                        "employeeNumber": "41239520"
                      }, {
                        "firstName": "Matthew",
                        "lastName": "Taylor",
                        "companyName": "Pubmatic",
                        "image": "http://api.randomuser.me/portraits/med/women/13.jpg",
                        "address": "Hariyana",
                        "profile": "He is a good developer and good human being and good team player",
                        "age": "abc.pqr@xyz.com",
                        "employeeNumber": "01963597"
                      }, {
                        "firstName": "Mark",
                        "lastName": "Tiegs",
                        "companyName": "Cognizant",
                        "image": "http://api.randomuser.me/portraits/med/women/14.jpg",
                        "address": "Chennai",
                        "profile": "He is a good developer and good human being and good team player",
                        "age": "abc.pqr@xyz.com",
                        "employeeNumber": "65321951"
                      }, {
                        "firstName": "Karla",
                        "lastName": "Tetzel",
                        "companyName": "Capgemini",
                        "image": "http://api.randomuser.me/portraits/med/women/45.jpg",
                        "address": "New York",
                        "profile": "He is a good developer and good human being and good team player",
                        "age": "abc.pqr@xyz.com",
                        "employeeNumber": "03266987"
                      }, {
                        "firstName": "Ian",
                        "lastName": "Dundas",
                        "companyName": "address Bank",
                        "image": "http://api.randomuser.me/portraits/med/women/43.jpg",
                        "address": "San fransisco",
                        "profile": "He is a good developer and good human being and good team player",
                        "age": "abc.pqr@xyz.com",
                        "employeeNumber": "29472012"
                      }, {
                        "firstName": "Marco",
                        "lastName": "Cacciacarro",
                        "companyName": "Pega System",
                        "image": "http://api.randomuser.me/portraits/med/women/39.jpg",
                        "address": "Hydrabad",
                        "profile": "He is a good developer and good human being and good team player",
                        "age": "abc.pqr@xyz.com",
                        "employeeNumber": "56446691"
                      }];

    beforeEach(function(){
      backendService = {
        getEmployeesDetailsList: function(){
          deferred = q.defer();
          deferred.resolve(employeeDetails);
          return deferred.promise;
        }
      };
    });
    
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q, _$httpBackend_, _myService_) {
    q = $q;
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    myService = _myService_;


    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      myService: backendService,
      // place here mocked dependencies
    });
  }));

  it('should call the Employee service method', function() {
    
    spyOn(backendService, 'getEmployeesDetailsList').andCallThrough();
    scope.grade();
    //deferred.resolve();
    scope.$root.$digest();
    expect(backendService.getEmployeesDetailsList).toHaveBeenCalled();
  });

  it('should call employees', function() {
    $httpBackend.expectGET('data/employee.json').respond(200, employeeDetails);
    var dd = myService.getEmployeesDetailsList();
    $httpBackend.flush();
    expect(dd).not.toBe(null);
    expect(employeeDetails[2].firstName).toEqual('Jamie');
    expect(employeeDetails.length).toBe(9);
  });

  describe('$scope.init', function(){

    it('should print the text', function() {
      scope.init();
      spyOn(scope, 'printText');
      //expect(scope.printText).toHaveBeenCalled();
      expect(scope.name).not.toBeUndefined();
    });
  });
  describe('$scope.getEmployeeDetails', function() {
    
    it('should call getEmployeeDetails.....Manoj', function() {
      
      spyOn(backendService, 'getEmployeesDetailsList').andCallThrough();
      scope.getEmployeeDetails();
      scope.$root.$digest();
      expect(backendService.getEmployeesDetailsList).toHaveBeenCalled();
      expect(scope.employeeData).not.toBe(null);

      console.log("scope.employeeData = " + scope.employeeData.length);
      expect(scope.employeeData[0].lastName).toEqual('Chepesky');
    });
  });

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });
  
});
