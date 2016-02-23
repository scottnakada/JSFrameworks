'use strict';

angular.module('routingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Privacy', {
        url: '/Privacy',
        templateUrl: 'app/Privacy/Privacy.html',
        controller: 'PrivacyCtrl'
      });
  });
