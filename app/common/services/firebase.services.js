const FIREBASE_SERVICES = (function() {
  'use strict';

  angular
    .module('steveApp')
    .factory('firebaseService', firebaseService);

  firebaseService.$inject = ['$log'];
  function firebaseService($log) {
    let config = {
      apiKey: 'AIzaSyBu6JvvbGRIquWqJXWBH9P9tFjgTQpHhCk',
      authDomain: 'project-4409778497392085844.firebaseio.com',
      databaseURL: 'https://project-4409778497392085844.firebaseio.com/'
    };
    let token;

    return {
      database: null,
      getConfigure: function() {
        return config;
      },
      initialize: function() {
        let self = this;
        firebase.initializeApp(config);
        self.database = firebase.database();
      },
      authenticate: function(email, password, success) {
        token = firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(function() {
            success();
          })
          .catch(function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            $log.log(errorMessage);
          });

        return token;
      },
      getReference: function(data, callback) {
        let self = this;
        let databaseReference = self.database.ref(data);
        databaseReference.on('value', function(snapshot) {
          callback(snapshot.val());
        });
      },
      signOut: function() {
        firebase.auth().signOut().then(function() {
          $log.log('Sign Out Successed');
        }).catch(function(error) {
          $log.log("Sign Out Error");
        });
      }
    };
  }
})();

export { FIREBASE_SERVICES };
