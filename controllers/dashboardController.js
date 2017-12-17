app.controller("dashboardCtrl", function ($scope, $location, dataExchange, $rootScope) {
  if ($rootScope.projects.length < 1) {
    $scope.NoOfProjects = true
  } else {
    $scope.NoOfProjects = false;
  }
  $scope.rowSelected = function (info) {
    $scope.selected = this.project;
    $rootScope.rowSelected = $scope.selected;
    $location.url("/view")
  }
  $scope.editValue = function (info) {
    dataExchange.projectToBeEdited(info).then(function (data) {
      $rootScope.result = data;
    });
    $location.url("/edit");

  }
  $scope.deleteValue = function (info) {
    dataExchange.projectToBeDeleted(info).then(function (data) {
      $rootScope.projects = data;
    });
  }

})