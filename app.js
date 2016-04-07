var app = angular.module('myApp', ['infinite-scroll']);
	app.controller('MyController',function($scope, $http){

		$scope.items = [];
		$scope.getItems = function() {

			$http({
				   method : 'GET',
				   url : 'http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane'
				 })
				.success(function(data, status) {
					$scope.items = data.geonames;
			
				})
				.error(function(data, status) {
					alert("Error");
				});
		};
			
		$scope.metric = {
    			availableOptions: [
      			{id: '-- ALL --'},
      			{id: 'areaInSqKm'},
			{id: 'population'}
    			],
    		selectedOption: {id: '-- ALL --'}
    		};
	
		$scope.fieldName="continentName";
		
		$scope.getTotal = function(y){
   		 var total = 0;
    		var x = document.getElementsByClassName(y);
		var i;
		for (i = 0; i < x.length; i++) {
    			total+= parseInt(x[i].innerHTML);
		}
		
    		return total;
		}

		
		

	});	
	app.filter('unique', function() {
		return function(input, key) {
			var unique = {};
			var uniqueList = [];
			for(var i = 0; i < input.length; i++){
				if(typeof unique[input[i][key]] == "undefined"){
					unique[input[i][key]] = "";
					uniqueList.push(input[i]);
				}
			}
			return uniqueList;
		};
	});
