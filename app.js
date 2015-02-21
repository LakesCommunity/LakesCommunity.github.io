var app = angular.module('kidscheckin', ['ngDragDrop','ui.bootstrap']);

app.controller('MainCtrl',['$scope','$http', function($scope, $http) {

  $scope.empty = "Empty";

  $scope.add = function(v) {
	$scope.men.push(v);
	$scope.newname = null;
  };

   $scope.remove = function (num,v) {
    if($scope.women.length === 1){
      $scope.empty = true;
    }
		if(num === 1){
			$scope.men.splice(v,1);
		}else if(num === 2){
			$scope.women.splice(v,1);
		}
  };
  $scope.move = function (man,v){
		$scope.women.push(man);
		$scope.men.splice(v,1);
  };
  $scope.move_one = function (man,v){
	$scope.men.push(man);
	$scope.people.splice(v,1);
  };

  $scope.transfer = function ($event,index,array){
      array.push($data);
  };

  $scope.people = [
		'John',
      'Jack',
      'Mark',
      'Ernie'
  ];

  $scope.men = [
      'John',
      'Jack',
      'Mark',
      'Ernie'
      ];
      
	$scope.women = [
      ];

      $scope.addText = "";


      $scope.dropSuccessHandler = function($event,index,array){
          array.splice(index,1);

      };

      $scope.onDrop = function($event,$data,array){
          array.push($data);
          $scope.empty = false;
      };
     $scope.selected = undefined;

    $scope.states = [];
    $http.get('Family.json').success(function (data){
        $scope.states = data;
    }).error(function(data){
        alert("Fail");
    });

	 //$scope.states = [
      //   'Alabama',
      //   'Alaska',
      //   'Arizona',
      //   'Arkansas',
      //   'California',
      //   'Colorado',
      //   'Connecticut',
      //   'Delaware',
      //   'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
}]);
