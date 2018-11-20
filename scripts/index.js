var testModule = angular.module("testModule", []);

testModule.controller("testController", function($scope, $http) {
    $scope.availableArray = [];
    $scope.requiredArray = [];
    $scope.selectedColumnInfo = null;
    $scope.layoutName = "";
    $scope.resultPerPage = 0;
    $scope.defaultReport = "";
    $scope.isShared = false;
    $scope.isDefault = false;
    


    var incomingData = {
        layoutName: "UserColumnInfo",
        resultPerPage: 20,
        defaultReport: "accountDetailReport",
        isShared: true,
        isDefault: false,
        columnData: [{
            "fieldName": "Test Field",
            "isVisible": true,
            "includeInSearch": true,
            "sortOrder": 1,
            "sortDirection": "0",
            "displayOrder": 1,
            "textAlignment": "center"
        }, {
            "fieldName": "Custom Field",
            "isVisible": true,
            "includeInSearch": true,
            "sortOrder": 2,
            "sortDirection": "1",
            "displayOrder": 2,
            "textAlignment": "left"
        }, {
            "fieldName": "Other Field",
            "isVisible": false,
            "includeInSearch": true,
            "sortOrder": 3,
            "sortDirection": "1",
            "displayOrder": 3,
            "textAlignment": "right"
        }, {
            "fieldName": "Data Field",
            "isVisible": false,
            "includeInSearch": false,
            "sortOrder": 4,
            "sortDirection": "1",
            "displayOrder": 4,
            "textAlignment": "left"
        }, {
            "fieldName": "Number Field",
            "isVisible": true,
            "includeInSearch": false,
            "sortOrder": 5,
            "sortDirection": "1",
            "displayOrder": 5,
            "textAlignment": "center"
        }, {
            "fieldName": "String Field",
            "isVisible": true,
            "includeInSearch": false,
            "sortOrder": 6,
            "sortDirection": "1",
            "displayOrder": 6,
            "textAlignment": "right"
        }, {
            "fieldName": "Date Field",
            "isVisible": false,
            "includeInSearch": false,
            "sortOrder": 7,
            "sortDirection": "0",
            "displayOrder": 7,
            "textAlignment": "left"
        }]
    };

    $scope.layoutName = incomingData.layoutName;
    $scope.resultPerPage = incomingData.resultPerPage;
    $scope.defaultReport = incomingData.defaultReport;
    $scope.isShared = incomingData.isShared;
    $scope.isDefault = incomingData.isDefault;

    for(let i=0; i<incomingData.columnData.length; i++) {
        incomingData.columnData[i].isSelected = false;
        if(incomingData.columnData[i].isVisible == true) {
            $scope.availableArray.push(incomingData.columnData[i]); 
        }
        else {
            $scope.requiredArray.push(incomingData.columnData[i])
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
        $scope.selectedColumnInfo = refData;
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

    $scope.moveColumnsUp = function() {
        alert("Move Up");
    }

    $scope.moveColumnsDown = function() {
        alert("Move Down");
    }
});