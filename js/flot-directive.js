'use strict';

angular.module('flotD', [])
    .directive('flotChart', function () {
        var htmlTemplate = '<div></div>';

        return {
            template: htmlTemplate,
            restrict: 'E',
            replace: true,
//            scope:{
//                floatData:'=',
//                floatOnSeriesClick :'='
//            },
            link: function (scope, charDiv, attrs) {
               // debugger;

                var chart = null,
                    opts = { };

                var data = scope[attrs.ngModel];
                var onSeriesClickFn = scope[attrs.floatOnSeriesClick];
                var options = {

                    series: {
                        pie: {
                            show: true,
                            radius: 1,
                            label: {
                                show: true,
                                radius: 3 / 4,
                                formatter: function (label, series) {

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
                    },zoom: {
                        interactive: true
                    },
                    pan: {
                        interactive: true
                    }
                };
                var chart = null;

                scope.$watch('floatData', function (v) {
                   // chart = $.plot(elem, v , options);
                    jQuery(charDiv).unbind();
                   // debugger;
                    if(!v) return;
                    if(!chart){
                      chart =  $.plot(charDiv, v, options);
                        debugger;
                      //if(charDiv.show)  charDiv.show();
                    }else{
                        chart.setData(v);
                        chart.setupGrid();
                        chart.draw();
                    }


                    jQuery(charDiv).bind("plotclick", function(event, pos, flotObject) {
                       // debugger;
                        if (!flotObject) {
                            return;
                        }
                        if(typeof onSeriesClickFn === 'function' ){
                          //  debugger;
                            onSeriesClickFn(flotObject)
                        }
                    });
                    /*charDiv.bind("plotclick", function(event, pos, obj) {
                        debugger;
                    });
                    charDiv.bind("plotclick", function (event, pos, item) {
                        debugger;
                    });*/
                   /* charDiv.bind("click", function(event, pos, obj) {
                        debugger;
                        event.preventDefault();
                    });*/

/*
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
*/
                });
            }
        }
    });
