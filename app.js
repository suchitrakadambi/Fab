
var app = angular.module("myapp", ['ngRoute']);
app.run(function ($rootScope) {
    $rootScope.projects = [];
})
