'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('testApp')
  .directive('myDirective', function () {
    return{
		restrict: "E",
		scope:{
			record: "=empdata",
			gotodetails: "&"
		},
		templateUrl : 'views/partials/empList-Template.html',
		//template : '<div><a class="item item-avatar" ng-click="gotodetails(record)" href="#/details{{record.employeeNumber}}"><img src="{{record.image}}"><p class="headerTxt">Name : {{record.firstName}}</p></a></div>',
		controller: ['$scope', function($scope){

			//console.log("record == " + $scope.record.firstName);

		}],

	}
  });
