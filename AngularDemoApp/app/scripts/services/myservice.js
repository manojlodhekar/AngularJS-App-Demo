'use strict';

/**
 * @ngdoc service
 * @name testApp.myService
 * @description
 * # myService
 * Service in the testApp.
 */
angular.module('testApp')
  .service('myService', ['$q', '$http', '$log', '$rootScope', function($q, $http, $log, $rootScope){

	var employeeDetails = [];
	//var _employeeDetails;

	//return{

		this.getEmployeesDetailsList = function(){
			var deferred = $q.defer();
			
			 $http.get('data/employee.json').then(
                function(data) {
                    if (data && data.data) {
                       employeeDetails = data.data;
                       deferred.resolve(employeeDetails);
                    }
                },
                function(error) {
                    $rootScope.releaseVersion = 0;
                }
               );
			 return deferred.promise;

			},

			this.getEmployeesList = function(){
				return employeeDetails;
			},

			this.getEmployeesDetails = function(empId){
				var empData;
				var deferred =  $q.defer();
				var me = this;
				if(employeeDetails.length < 1 ){
					this.getEmployeesDetailsList().then(function(employee){
						empData = me.getEmpDetails(employee, empId);
						//console.log("data"+empData);
						deferred.resolve(empData);
						return empData;
					},
	                function(error) {
	                    $rootScope.releaseVersion = 0;
	                });
	                return deferred.promise;
				}else{
					empData = this.getEmpDetails(employeeDetails, empId);
					deferred.resolve(empData);
					return deferred.promise;
				}
				return deferred.promise;
			},
			this.getEmpDetails = function(empData, empId){
				var empDetails;
				angular.forEach(empData, function(value, key) {
                    if(value.employeeNumber === empId){
                    	empDetails = value;	
                    }
                })
				return empDetails;
			}
		
	//};
}])
