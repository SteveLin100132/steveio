/**
 * [Form Page Controller]
 * Create 2018/07/26
 * @author Chieng-Yu Lin
 */
const FORM_CONTROLLER = (function() {
  'use strict';

  angular
    .module('steveApp')
    .controller('formController', formController)

  /**
   * [formController]
   * @param {Object} $scope [scope services]
   * Create 2018/07/26
   * @author Chieng-Yu Lin
   */
  formController.$inject = ['$scope'];
  function formController($scope) {
    let vm = this;

    vm.submitForm = function() {
      console.log(vm.user);
    };
  }
})();

export { FORM_CONTROLLER };
