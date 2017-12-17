app.controller("editCtrl", function ($scope, $rootScope, $location, dataExchange) {
    $scope.disable = "true";
    $scope.ipType = dataExchange.ipState;
    if ($rootScope.result) {
        console.log("yes");
        $scope.myIp = $rootScope.result;
    }
    $scope.save = function (info) {
        var d = new Date();
        $rootScope.result.lastModified = d.toLocaleDateString() + " " + d.toLocaleTimeString();
        $location.url("/dashboard");
    }
    $scope.back = function () {
        $location.url("/dashboard");
    }

})