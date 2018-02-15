'use strict';
angular.module('nestApp.services')
  .factory('logHeader', function($window, appConfigService, $log, platformInfo) {
    $log.info(appConfigService.nameCase + ' v' + $window.version + ' #' + $window.commitHash);
    $log.info('Client: ' + JSON.stringify(platformInfo));
    return {};
  });
