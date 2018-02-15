'use strict';

angular.module('nestApp.controllers').controller('headController', function($scope, appConfigService, $log) {
  $scope.appConfig = appConfigService;
  $log.info('Running head controller:' + appConfigService.nameCase)
});
