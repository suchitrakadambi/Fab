app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/homepage.html',
            controller: 'loginCtrl'
        }).
        when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerCtrl'
        }).
        when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardCtrl'
        }).
        when('/createproject', {
            templateUrl: 'views/createProject.html',
            controller: 'createProjectCtrl'
        }).
        when('/edit', {
            templateUrl: 'views/edit.html',
            controller: 'editCtrl'
        }).
        when('/view', {
            templateUrl: 'views/view.html',
            controller: 'viewCtrl'
        });


}]);
