
/**
 * [Inject App Service]
 * Create 2018/07/26
 * @author Chieng-Yu Lin
 */
(function() {
  'use strict';

  angular.module('steveApp', ['ngRoute']);
})();

/**
 * [App Main Controller]
 * Create 2018/07/26
 * @author Chieng-Yu Lin
 */
(function() {
  'use strict';

  angular
    .module('steveApp')
    .controller('mainController', mainController);

  /**
   * [mainController]
   * @param {Object} $scope [scope services]
   * Create 2018/07/26
   * @author Chieng-Yu Lin
   */
  mainController.$inject = ['$scope'];
  function mainController($scope) {
    let vm = this;

    vm.pages = [
      { title: "Form Page", link: "#!/form" },
      { title: "Switch Tab Page", link: "#!/switchTab" },
      { title: "Switch Tab Service Page", link: "#!/switchTabService" }
    ];
  }
})();
