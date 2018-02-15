'use strict';

angular.module('nestApp.services').factory('appConfigService', function($window) {
  return $window.appConfig;
});
