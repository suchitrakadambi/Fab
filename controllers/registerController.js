app.controller('registerCtrl',function($scope,$location){
$scope.userinfo = {
    userName:"",
    userEmail:"",
    userPwd:""
}
$scope.EmailVal = false;
$scope.register = function(info){
if( users.length < 1){
    users.push(info);
    $location.url("/")
}else{
    // loop through to identify the user email is exits 
    users.forEach(function(user){
      if(user.userEmail == info.userEmail){
          $scope.EmailVal = "true";
          console.log($scope.EmailVal);
      }
      else{
          users.push(info);
          $location.url("/")
      }
    })
}
}

})
var users = [];