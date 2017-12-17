app.controller("createProjectCtrl", function ($scope, $rootScope, $location, dataExchange) {
  console.log("in the create project controller");
  var d = new Date();
  $scope.Ip = dataExchange.ip;
  $scope.ipType = dataExchange.ipState;
  $scope.submit = function (info) {
    var d = new Date();
    dataExchange.ip.lastModified = d.toLocaleDateString() + " " + d.toLocaleTimeString();
    var result = dataExchange.save(info);
    if (typeof (result) == "boolean") {
      $scope.repeated = "true";
    } else if (result instanceof Array) {
      $location.url("/dashboard");
      dataExchange.ip = {};
    }
  }
  $scope.reset = function () {
    dataExchange.ip.name.type = '';
    dataExchange.ip.referenceNumber = "";
    dataExchange.ip.nameOfInventor = "";
    dataExchange.ip.projectTitle = "";
    dataExchange.ip.lastModified = "";
    dataExchange.ip.owner = "";
    dataExchange.ip.summary = "";
  }
  $scope.back = function () {
    $location.url("/dashboard");
  }
})