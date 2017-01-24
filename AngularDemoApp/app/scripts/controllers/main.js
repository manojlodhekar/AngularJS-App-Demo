'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', ['$scope', 'myService', function ($scope, myService) {
  
    var employeeDetails = [];
    $scope.password = '';
    $scope.employeeData = [];


    $scope.init = function(){
    	$scope.name = "My name is Manoj";
    	$scope.printText($scope.name);
    	$scope.getEmployeeDetails();
    }

    $scope.printText = function(msg){

    	console.log(msg);
    }

	  $scope.getEmployeeDetails = function(){

	  	myService.getEmployeesDetailsList().then(function(data){
	    	$scope.employees = data;
	    	employeeDetails = $scope.employees;
	    	$scope.employeeData = employeeDetails;
	    	console.log("employeeDetails= " + employeeDetails);
	    	// $scope.$watch('empSearchStr', function(newValue, oldValue) {
		    // 	console.log("empSearchStr = " + newValue);
		    // });
	    });

	  }
	  
	  $scope.gotoDetailsPage = function(selectedEmployee){
		  
		  console.log("Details of Employee = " + selectedEmployee.firstName + " " + selectedEmployee.lastName + " lives in " + selectedEmployee.addess);
	  }

    $scope.init();
  }]);
