'use strict';

app.factory('mushroomsFactory', function($q, $http){
	let getMushrooms = () => {
		let mushroomsArray = [];
		return $q((resolve, reject) => {
			$http.get('https://mushroommania-fb43d.firebaseio.com/.json')
			.then((itemObject) => {
				let mushroomCollection = itemObject.data.mushrooms;
				let mushroomKeys = Object.keys(mushroomCollection);
				mushroomKeys.forEach(function(key){
					mushroomsArray.push(mushroomCollection[key]);
				});
				console.log('mushroomCollection', mushroomsArray);
				resolve(mushroomsArray);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getMushrooms};
});