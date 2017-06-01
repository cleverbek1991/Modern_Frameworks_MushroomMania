'use strict';

app.controller('mushroomCtrl', function($scope, mushroomsFactory){
	mushroomsFactory.getMushrooms()
	.then(function(mushroomCollection){
		$scope.mushrooms = mushroomCollection;
		console.log('mushrooms', $scope.mushrooms);
	});
});