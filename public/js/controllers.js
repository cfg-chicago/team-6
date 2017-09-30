app.controller('AuthCtrl', function($scope, $timeout, $mdSidenav, $log, $location) {
    console.log('Auth Controller!');
    $scope.auth = function auth() {

        firebase.auth().signInWithEmailAndPassword($scope.username, $scope.password).catch(function(error) {

        });

        $scope.isAuth = true;
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


    $scope.color = "";








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

app.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log, $location) {
    $scope.close = function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('right').close()
            .then(function() {
                $log.debug("close Right is done");
            });

    };
});

app.controller('slideShowCtrl', ['$scope', function($scope) {
    $scope.slides = [
        { name: 'Not my cat.', url: 'https://farm2.staticflickr.com/1318/5114665665_e55b2c2169_n.jpg' },
        { name: 'Again, not my cat.', url: 'https://farm2.staticflickr.com/1079/901626554_8bc51ec160_n.jpg' }
    ]
}]);
app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
            .then(function() {
                $log.debug("close LEFT is done");
            });

    };
});