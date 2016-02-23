'use strict';

angular.module('routingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('About', {
        url: '/About',
        templateUrl: 'app/About/About.html',
        controller: 'AboutCtrl'
      });
  });
