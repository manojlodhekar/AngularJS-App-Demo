'use strict';

describe('Service: myService', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var myService;
  var employeeDetails;
  var $httpBackend;
  var emp;
  var empID;
  beforeEach(inject(function (_$httpBackend_, _myService_) {
    employeeDetails = [{
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


    myService = _myService_;
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/employee.json').respond(200, employeeDetails);
    emp = myService.getEmployeesDetailsList();
     $httpBackend.flush();
  }));

  it('should do something', function () {
    expect(!!myService).toBe(true);
  });

  it('should get the Employee data from get method', function() {
    //$httpBackend.expectGET('data/employee.json').respond(200, employeeDetails);
    //emp = myService.getEmployeesDetailsList();
    //$httpBackend.flush();
    //console.log("emp =" + emp.firstName);
    expect(emp).not.toBe(undefined);
    expect(emp).not.toBe(null);
    expect(employeeDetails[0].firstName).toEqual('Mike');
    expect(employeeDetails.length).toBe(9);

  });
  it('should get the specific Employee data', function() {
    //$httpBackend.expectGET('data/employee.json').respond(200, employeeDetails);
    emp = myService.getEmpDetails(employeeDetails, '51239657');
    expect(emp).not.toBe(null);
    expect(emp).not.toBe(undefined);
    //console.log(emp.firstName);
    expect(emp.firstName).toEqual('Jamie');

  });

  it('should return passed employee details on ID', function() {
    //$httpBackend.expectGET('data/employee.json').respond(200, employeeDetails);
    empID = myService.getEmployeesDetails('65321951');
     //$httpBackend.flush();
    expect(empID).not.toBe(null);
    expect(empID).not.toBe(undefined);
    //console.log(empID.status);
    //expect(empID.lastName).toEqual('Tiegs');

  });
  

   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

});
