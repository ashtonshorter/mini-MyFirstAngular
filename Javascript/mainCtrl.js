angular.module('friendsList');

angular.module('friendsList').controller('mainCtrl', function($scope){
	$scope.friends = ['a', 'b', 'c'];

	$scope.addFriend = function() {
		var alreadyAdded = false;
		for(var i = 0; i < $scope.friends.length; i++) {
			if($scope.input != $scope.friends[i]) {
				alreadyAdded = false;
			} else {
				alert("Name already in the friends list");
			}
		}

		if(!alreadyAdded) {
			$scope.friends.push($scope.input);
			$scope.input = "";
		}
		
	}
});