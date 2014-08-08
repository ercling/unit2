'use strict';

/**
 * @ngdoc function
 * @name w32App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the w32App
 */
angular.module('w32App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
