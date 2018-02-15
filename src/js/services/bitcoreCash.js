'use strict';
angular.module('nestApp.services')
  .factory('bitcoreCash', function bitcoreFactory(bwcService) {
    var bitcoreCash = bwcService.getBitcoreCash();
    return bitcoreCash;
  });
