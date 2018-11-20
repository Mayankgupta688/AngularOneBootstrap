var testModule = angular.module("testModule", []);

testModule.controller("testController", function($scope, $http) {
    $scope.availableArray = [];
    $scope.requiredArray = [];


    var incomingData = [{
        "fieldName": "Test Field",
        "isVisible": true,
        "includeInSearch": false,
        "sortOrder": 1,
        "sortDirection": true,
        "displayOrder": 1
    }, {
        "fieldName": "Custom Field",
        "isVisible": true,
        "includeInSearch": false,
        "sortOrder": 2,
        "sortDirection": true,
        "displayOrder": 2
    }, {
        "fieldName": "Other Field",
        "isVisible": false,
        "includeInSearch": false,
        "sortOrder": 3,
        "sortDirection": true,
        "displayOrder": 3
    }, {
        "fieldName": "Data Field",
        "isVisible": false,
        "includeInSearch": false,
        "sortOrder": 4,
        "sortDirection": true,
        "displayOrder": 4
    }, {
        "fieldName": "Number Field",
        "isVisible": true,
        "includeInSearch": false,
        "sortOrder": 5,
        "sortDirection": true,
        "displayOrder": 5
    }, {
        "fieldName": "String Field",
        "isVisible": true,
        "includeInSearch": false,
        "sortOrder": 6,
        "sortDirection": true,
        "displayOrder": 6
    }, {
        "fieldName": "Date Field",
        "isVisible": false,
        "includeInSearch": false,
        "sortOrder": 7,
        "sortDirection": true,
        "displayOrder": 7
    }];

    for(let i=0; i<incomingData.length; i++) {
        incomingData[i].isSelected = false;
        if(incomingData[i].isVisible == true) {
            $scope.availableArray.push(incomingData[i]); 
        }
        else {
            $scope.requiredArray.push(incomingData[i])
        }
    }

    $scope.selectedElement = function(refData) {
        for(let i=0; i<$scope.availableArray.length; i++){
            $scope.availableArray[i].isSelected = false;
        }
        for(let i=0; i<$scope.requiredArray.length; i++){
            $scope.requiredArray[i].isSelected = false;
        }
        
        refData.isSelected = true;
    }

    $scope.moveColumnToRequired = function() {
        var indexValue = -1;
        for(let i=0;i<$scope.availableArray.length; i++) {
            if($scope.availableArray[i].isSelected == true) {
                indexValue = i;
                break;
            }
        }

        if(indexValue > -1) {
            $scope.requiredArray.push($scope.availableArray[indexValue]);
            $scope.availableArray.splice(indexValue, 1);
        }
    }

    $scope.moveColumnToAvailable = function() {
        var indexValue = -1;
        for(let i=0;i<$scope.requiredArray.length; i++) {
            if($scope.requiredArray[i].isSelected == true) {
                indexValue = i;
                break;
            }
        }

        if(indexValue > -1) {
            $scope.availableArray.push($scope.requiredArray[indexValue]);
            $scope.requiredArray.splice(indexValue, 1);
        }
    }

    $scope.moveAllToRequired = function() {
        for(let i=0;i<$scope.availableArray.length; i++) {
            $scope.requiredArray.push($scope.availableArray[i]);
        }
        $scope.availableArray = [];
        
    }

    $scope.moveAllToAvailable = function() {
        for(let i=0;i<$scope.requiredArray.length; i++) {
            $scope.availableArray.push($scope.requiredArray[i]);
        }
        $scope.requiredArray = [];
        
    }
});