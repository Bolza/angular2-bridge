(function() {
    'use strict';
    var ExampleModule = angular.module('ExampleModule', []);

    ExampleModule.controller('SomeController', ['Bridge', function (Bridge) {
        Bridge.on('someEvent', function(val) {
            console.log('1. Value Set from NG2 Component', val);
        });

        Bridge.on('someEvent', function(val) {
            console.log('2. Multiple listeners, same event', val);
        });
    }]);

}());
