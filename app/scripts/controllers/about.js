'use strict';

/**
 * @ngdoc function
 * @name w32App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the w32App
 */
angular.module('auction')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
