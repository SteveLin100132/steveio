/**
 * [App Router]
 * Create 2018/07/26
 * @author Chieng-Yu Lin
 */
(function() {
  'use strict';

  angular
    .module('steveApp')
    .value('Constant', { ACCESS: false })
    .config(appRouter);

  /**
   * [appRouter]
   * @param {Object} $routeProvider [route provide services]
   * Create 2018/07/26
   * @author Chieng-Yu Lin
   */
  appRouter.$inject = ['$routeProvider', '$locationProvider'];
  function appRouter($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './app/views/connection/connection.view.html',
        controllerAs: 'vm'
      })
      .when('/form', {
        templateUrl: './app/views/formPage/form.html',
        controllerAs: 'vm'
      })
      .when('/form/:id', {
        templateUrl: './app/views/formPage/form.html',
        resolve: {
          accessPage: ['Constant', function(Constant) {
            return Constant.ACCESS;
          }]
        },
        controller: ['$routeParams', 'accessPage', function($routeParams, accessPage) {
            console.log(accessPage, $routeParams.id);
        }]
      })
      .when('/switchTab', {
        templateUrl: './app/views/switchTabPage/switchTab.html'
      })
      .when('/switchTabService', {
        templateUrl: './app/views/switchTabServicePage/switchTabService.html'
      })
      .otherwise({
        templateUrl: '404.html'
      });
  }
})();
