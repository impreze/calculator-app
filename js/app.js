var app = angular.module('CalculatorApp', []);

app.controller('MainController', function($scope) {
  $scope.screen = "";
  $scope.currentEntry = "";
  $scope.p1 = 0;
  $scope.p2 = 0;
  $scope.op = "";
  $scope.oldOp = "";
  $scope.negAllowed = true;

  /* SELECTING A NUMBER */
  $scope.append = function(num) {
    $scope.currentEntry += num;
    $scope.screen = $scope.currentEntry;
  }

  /* SELECTING THE OPERATOR */
  $scope.setOp = function(op) {

    if ($scope.op === "") {
			if(op === "sub" && $scope.isNegAllowed()){
      	$scope.append("-");      
    	}
			else {
				$scope.p1 = parseFloat($scope.currentEntry);
				$scope.op = op;
				$scope.oldOp = $scope.op;   
				$scope.currentEntry = "";
			}
    } 
    else {
			if(op === "sub" && $scope.isNegAllowed()){
      	$scope.append("-");      
    	}
			else {
				$scope.p2 = parseFloat($scope.currentEntry);

				if ($scope.oldOp === 'div') {
					$scope.p1 = $scope.p1 / $scope.p2;
				} else if ($scope.oldOp === 'mul') {
					$scope.p1 = $scope.p1 * $scope.p2;
				} else if ($scope.oldOp === 'sub') {
					$scope.p1 = $scope.p1 - $scope.p2;
				} else {
					$scope.p1 = $scope.p1 + $scope.p2;
				}
				$scope.op = op;
				$scope.oldOp = $scope.op;
				$scope.currentEntry = "";
			}
    }    
  }
  
  
  /* EQUALS FUNCTION */
  $scope.equals = function(){
    
    if($scope.op === 'add'){ 
      $scope.answer = $scope.p1 + parseFloat($scope.currentEntry);
			$scope.screen = $scope.answer;
    }
    if($scope.op === 'sub'){ 
      $scope.answer = $scope.p1 - parseFloat($scope.currentEntry);
			$scope.screen = $scope.answer;
    }
    if($scope.op === 'mul'){ 
      $scope.answer = $scope.p1 * parseFloat($scope.currentEntry);
			$scope.screen = $scope.answer;
    }
    if($scope.op === 'div'){
      $scope.answer = $scope.p1 / parseFloat($scope.currentEntry);
			$scope.screen = $scope.answer;      
    }
		
		/* Resetting after calling the equal function */
    $scope.currentEntry = "";
    $scope.p1 = 0;
    $scope.p2 = 0;
    $scope.op = "";
    $scope.oldOp = "";
  }
  
  
  /* CLEAR ALL DATA */
  $scope.clear = function(){
    $scope.currentEntry = "";
    $scope.screen = "";
    $scope.answer = 0;
    $scope.p1 = 0;
    $scope.p2 = 0;  
    $scope.op = ""; 
    $scope.oldOp = ""; 
  }
  
	
	/* CHECK IF USING NEGATIVE SYMBOL */
  $scope.isNegAllowed = function(){
    if ($scope.currentEntry === ""){
      return true;
    }
    else {
      return false;
    }
  }
});