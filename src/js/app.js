'use strict';

var modules = [
  'angularMoment',
  'monospaced.qrcode',
  'gettext',
  'ionic',
  'ionic-toast',
  'angular-clipboard',
  'ngTouch',
  'ngLodash',
  'ngCsv',
  'angular-md5',
  'bwcModule',
  'bitauthModule',
  'nestApp.filters',
  'nestApp.services',
  'nestApp.controllers',
  'nestApp.directives',
  'nestApp.addons'
];

var nestApp = window.nestApp = angular.module('nestApp', modules);

angular.module('nestApp.filters', []);
angular.module('nestApp.services', []);
angular.module('nestApp.controllers', []);
angular.module('nestApp.directives', []);
angular.module('nestApp.addons', []);
