'use strict';

angular.module('canvasJsD', [])
    .directive('canvasChart', function () {
        return{
            restrict: 'A',
            link: function(scope, elem, attrs){
                //var data = scope[attrs.ngModel];
                // If the data changes somehow, update it in the chart
                scope.$watch('canvasData', function(v){
                    debugger;
                    var chart = new CanvasJS.Chart(elem[0].id,
                        {
                            animationEnabled: true,
                            theme: "theme2",
                            data: [
                                {
                                    type: "pie",
                                    indexLabelFontFamily: "Garamond",
                                    indexLabelFontSize: 8,

                                    startAngle:-5,
                                    showInLegend: true,
                                 //   toolTipContent:"{label}",
                                    toolTipContent: "{y}%",
                                   // toolTipContent: "{label1}",
                                    dataPoints:v
                                }
                            ]
                        });

                    chart.render();
//                    angular.module('fChartModule', [])
//                        .directive('chart', function () {
//                            return {
//                                restrict: 'A',
//                                link: function(scope, elem, attrs) {
//                                    var data = scope[attrs.ngModel];
//                                    $.plot(elem, data, {});
//                                }
//                            };
//                        });
                  //  var data = scope[attrs.ngModel];
                        //    chart = $.plot(elem, v , options);
//                        var data1 = [
//                            {"label": "Series1", "data": 44},
//                            {"label": "Series2", "data": 51},
//                            {"label": "Series3", "data": 46},
//                            {"label": "Series4", "data": 89},
//                            {"label": "Series5", "data": 85}
//                        ];
//                          $.plot(elem, data1, {
//                            series: {
//                                pie: {
//                                    show: true
//                                }
//                            },
//                            grid: {
//                                hoverable: true,
//                                clickable: true
//                            }
//                        });
//                    var data = scope[attrs.ngModel];
//                                    $.plot(elem, data1, {series: {
//                                        pie: {
//                                            show: true
//                                        }
//                                    }});
                       // elem.show();
                });
            }
        };
    });
/*
angular.module('fChartModule', [])
    .directive('fchart', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                debugger;
                    var container =elem,
                    d1 = [[0, 4]],
                    d2 = [[0, 3]],
                    d3 = [[0, 1.03]],
                    d4 = [[0, 3.5]],
                    graph;

                graph = Flotr.draw(container, [
                    { data : d1, label : 'Comedy' },
                    { data : d2, label : 'Action' },
                    { data : d3, label : 'Romance',
                        pie : {
                            explode : 50
                        }
                    },
                    { data : d4, label : 'Drama' }
                ], {
                    HtmlText : false,
                    grid : {
                        verticalLines : false,
                        horizontalLines : false
                    },
                    xaxis : { showLabels : false },
                    yaxis : { showLabels : false },
                    pie : {
                        show : true,
                        explode : 6
                    },
                    mouse : { track : true },
                    legend : {
                        position : 'se',
                        backgroundColor : '#D2E8FF'
                    }
                });
//                var chart = null,
//                    opts = { };
//
//                var data = scope[attrs.ngModel];

//                scope.$watch('data', function (v) {
//                    if (!chart) {
//                        chart = $.plot(elem, v, opts);
//                        elem.show();
//                    } else {
//                        chart.setData(v);
//                        chart.setupGrid();
//                        chart.draw();
//                    }
//                });
            }
        }
    });*/
