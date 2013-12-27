'use strict';

angular.module('myApp.controllers', [])    .
    constant('SERVER','http://localhost:4002/json')    .
    controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        };
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }]).
    controller('HomeCtrl', ['$scope', 'Employee', function ($scope, Employee) {

    }]).controller('ChartCtrl', ['$scope', 'SERVER','$http','$location', function ($scope, server,$http,$location) {
        //debugger;

        init();

        $scope.data = [[[0, 1], [1, 5], [2, 2]]];
        $scope.floatData = [];
        /*[
            {"label": "Series1", "data": 44,clickable: true,more:'more-data1'},
            {"label": "Series2", "data": 51,clickable: true,more:'more-data2'},
            {"label": "Series3", "data": 46,clickable: true,more:'more-data3'},
            {"label": "Series4", "data": 89,clickable: true,more:'more-data4'},
            {"label": "Series5", "data": 85,clickable: true,more:'more-data5'}
        ];*/

        $scope.canvasData = [
            {  y: 6, legendText:"Domestic", label1: "(Domestic)83.3%" },
            {  y: 8, legendText:"Global", label1: "(Global)8.16%" }

        ];

        $scope.floatOnSeriesClick=function(flot){
            debugger;
           // alert(flot.series);

            console.log(JSON.stringify(flot.series));

            var seriesJSON = $scope.floatData[flot.seriesIndex].nextUrl;
            var url=  server + '/'+seriesJSON+'.json';
            loadData(url);


          //  $location.path(  server +  '/employees' )

        };

        function init(){
            debugger;
            var url = server + '/getData.json';
            loadData(url);
            //$scope.floatData
        }

        function loadData(url){
            $http.get(url).success(
                function(data, status, headers, config) {
                    debugger;
                    $scope.floatData = data;
                    // this callback will be called asynchronously
                    // when the response is available
                }).
                error(function(data, status, headers, config) {
                    debugger;
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }

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
