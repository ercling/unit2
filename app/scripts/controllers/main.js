'use strict';

var HomeController = function (productService) {
    var _this = this;
    _this.products = [];

    productService.getProducts()
        .then(function (data) { _this.products = data; });
};

HomeController.$inject = ['ProductService'];
angular.module('auction').controller('MainCtrl', HomeController);

/**
 * @ngdoc function
 * @name w32App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the w32App
 */
//angular.module('auction')
//  .controller('MainCtrl', function ($scope) {
//        console.log(productService.getProducts());
//    $scope.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
//  });
