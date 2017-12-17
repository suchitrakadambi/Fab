app.controller("viewCtrl", function ($scope, $rootScope, dataExchange, $location) {
    $scope.ipType = dataExchange.ipState
    $scope.diabale = "true";
    $scope.myIp = $rootScope.rowSelected;
    console.log($scope.myIp);
    $scope.back = function () {
        console.log("in the back")
        $location.url("/dashboard");
    }

})