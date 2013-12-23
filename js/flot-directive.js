'use strict';

angular.module('flotD', [])
    .directive('flotChart', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                debugger;

                var chart = null,
                    opts = { };

                var data = scope[attrs.ngModel];

                scope.$watch('floatData', function (v) {
                   // chart = $.plot(elem, v , options);
                    debugger;
                          $.plot(elem, v, {
                            series: {
                                pie: {
                                    show: true,
                                    radius: 1,
                                    label: {
                                        show: true,
                                        radius: 3/4,
                                        formatter:  function(label, series) {
                                            debugger;
                                            return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
                                        },
                                        background: {
                                            opacity: 0.5,
                                            color: '#000'
                                        }
                                    }
                                }
                            },
                              legend: {
                                  show: false
                              },
                            grid: {
                                hoverable: true,
                                clickable: true
                            }
                        });
                });
            }
        }
    });
