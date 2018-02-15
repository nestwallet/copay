'use strict';

angular.module('nestApp.controllers').controller('glideraTxDetailsController', function($scope) {

  $scope.cancel = function() {
    $scope.glideraTxDetailsModal.hide();
  };

});
