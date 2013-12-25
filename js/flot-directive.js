'use strict';

angular.module('flotD', [])
    .directive('flotChart', function () {
        return {
            restrict: 'A',
//            scope:{
//                floatData:'=',
//                floatOnSeriesClick :'='
//            },
            link: function (scope, charDiv, attrs) {
                debugger;

                var chart = null,
                    opts = { };

                var data = scope[attrs.ngModel];
                var onSeriesClicFn = scope[attrs.floatOnSeriesClick];
                scope.$watch('floatData', function (v) {
                   // chart = $.plot(elem, v , options);
                    charDiv.unbind();
                    debugger;
                          $.plot(charDiv, v, {

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

                    jQuery(charDiv.id).bind("plotclick", function(event, pos, obj) {
                        debugger;
                    });
                    charDiv.bind("plotclick", function(event, pos, obj) {
                        debugger;
                    });
                    charDiv.bind("click", function(event, pos, obj) {
                        debugger;
                    });
                    charDiv.bind("plotclick", function(event, pos, obj) {

//                        if (!obj) {
//                            return;
//                        }
//
//                        percent = parseFloat(obj.series.percent).toFixed(2);
//                        alert(""  + obj.series.label + ": " + percent + "%");
                        debugger;
                      if( onSeriesClicFn && ( typeof onSeriesClicFn ==='function')){
                          console.log('found @ floatOnSeriesClick');
                          debugger;
                          onSeriesClicFn(obj.series);
                      }
                     //
                    });
                });
            }
        }
    });
