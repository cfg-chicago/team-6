app.controller('AuthCtrl', function($scope, $timeout, $mdSidenav, $log, $location) {



      console.log('Auth Controller!');
      $scope.isAuth = true;
      $scope.logged_in = false;
      $scope.auth = function auth() {


        firebase.auth().signInWithEmailAndPassword($scope.username, $scope.password).catch(function(error) {


      });
        $scope.logged_in = true;
        $scope.isAuth=true;
      }

    $scope.open_login = function open_login() {
        $scope.isAuth = false;

      }

      $scope.log_out = function log_out(){
        firebase.auth().signOut();
        $scope.logged_in = false;
      }


    $scope.toggleLeft = buildDelayedToggler('left');

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */

    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    function buildDelayedToggler(navID) {
        return debounce(function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }

    function buildToggler(navID) {
        return function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    $log.debug("toggle " + navID + " is done");
                });
        };
    }

});

app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
    console.log('App Controller!');
});
app.controller('UserCtrl', function($scope, $timeout, $mdSidenav, $log) {
    //getuserdata from firebase
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('background').then(function(snapshot) {
      var color = snapshot.val();
    });



    $scope.backgroundcolor={
        a: false,
        b: false,
        c: true

    };
    








    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function() {
        return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
        return debounce(function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }

    function buildToggler(navID) {
        return function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    $log.debug("toggle " + navID + " is done");
                });
        };
    }


});
app.controller('FeedbackCtrl', function($scope, $timeout, $http, $location) {
    $scope.input;
    $scope.sentimentAnalysisCall = function() {
        var payload = {
            "documents": [{
                "language": "en",
                "id": "12345",
                "text": "The field trip was super fun. I think I would like to go again. I really dont like my teacher though. i hate school. school is such a bitch"
            }]
        };

        var config = {
            method: 'POST',
            url: 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
            headers: {
                "ocp-apim-subscription-key": "17ccb92b251e41e2b9a4bbda1ad76ab2",
                "content-type": "application/json",
                "accept": "application/json"
            },
            //x-www-form-urlencoded
            data: payload
        };

        $http(config).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.sentiment=response;
            console.log(response);

        }, function errorCallback(response) {
            console.log(response);
            console.log('failedd');


        });
    }

});

app.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log, $location) {
    $scope.close = function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('right').close()
            .then(function() {
                $log.debug("close Right is done");
            });

    };
});


app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
            .then(function() {
                $log.debug("close LEFT is done");
            });

    };
});
