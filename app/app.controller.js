
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
  mainController.$inject = ['$scope', 'firebaseService'];
  function mainController($scope, firebaseService) {
    let vm = this;

    vm.pages = [
      { title: "Form Page", link: "#!/form" },
      { title: "Switch Tab Page", link: "#!/switchTab" },
      { title: "Switch Tab Service Page", link: "#!/switchTabService" }
    ];

    firebaseService.initialize();
    let token = firebaseService.authenticate('jojo404032@gmail.com', 'linping1315', function() {
      firebaseService.getReference('steve-20180727', function(val) {
        console.log(val);
        firebaseService.signOut();
      });
    });

    // firebaseService.getReference('steve-20180727', function(val) {
    //   console.log(val);
    //   firebaseService.signOut();
    // });
  }
})();
