'use strict';

angular.module('angularjsSmartcheckboxApp')
  .directive('smartCheckbox', [function () {
    return {
      templateUrl: 'views/smartcheckbox.html',
      restrict: 'E',
      replace: true,
      scope: {model: '='},
      controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
        $scope.orderby = 'label';

        $scope.unselect = function (item) {
          item.value = false;
        };

        $scope.unselectAll = function () {
        };
        $scope.selectAll = function () {
        };
        $scope.toggle = function () {
        };
      }]
    };
  }]);
