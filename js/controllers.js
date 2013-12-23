'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])
    .controller('HomeCtrl', ['$scope', 'Employee', function ($scope, Employee) {

    }]).controller('ChartCtrl', ['$scope', 'Employee', function ($scope, Employee) {
        debugger;
        $scope.data = [[[0, 1], [1, 5], [2, 2]]];
        $scope.floatData = [
            {"label": "Series1", "data": 44},
            {"label": "Series2", "data": 51},
            {"label": "Series3", "data": 46},
            {"label": "Series4", "data": 89},
            {"label": "Series5", "data": 85}
        ];
        $scope.canvasData = [
            {  y: 6, legendText:"Google", label1: "83.3%" },
            {  y: 8, legendText:"Yahoo!", label1: "8.16%" },
            {  y: 9, legendText:"Bing", labe1: "4.67%" },
            {  y: 4, legendText:"Baidu" , label1: "1.67%"},
            {  y: 5, legendText:"Baidu11" , label1: "1.67%"}

        ];


    }])
    .controller('EmployeeListCtrl', ['$scope', 'Employee', function ($scope, Employee) {
        $scope.employees = Employee.query();
    }])
    .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function ($scope, $routeParams, Employee) {
        $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
    }])
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    }]);
