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
  appRouter.$inject = ['$routeProvider'];
  function appRouter($routeProvider) {
    $routeProvider
      .when('/form', {
        templateUrl: './app/components/formPage/form.html',
      })
      .when('/form/:id', {
        templateUrl: './app/components/formPage/form.html',
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
        templateUrl: './app/components/switchTabPage/switchTab.html'
      })
      .when('/switchTabService', {
        templateUrl: './app/components/switchTabServicePage/switchTabService.html'
      })
      .otherwise({
        templateUrl: '404.html'
      });
  }
})();
