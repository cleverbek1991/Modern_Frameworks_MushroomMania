'use strict';

var app = angular.module('mushrooms', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/mushroom-list.html',
		controller: 'mushroomCtrl'
	}).
	// when('/showall', {
	// 	templateUrl: 'partials/flavor-list.html',
	// 	controller: 'FlavorCtrl'
	// }).
	otherwise('/');
});