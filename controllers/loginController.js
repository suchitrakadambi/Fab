app.controller("loginCtrl", function ($scope, $location) {
    $scope.loginError = false;
    $scope.login = function (info) {
        if ((info.email === "legalfab@gmail.com") && (info.pwd === "legalfab")) {
            $location.url("/dashboard")
        }
        else {
            $scope.loginError = true;
        }
        users.forEach(function (user) {
            console.log(user);
            if ((user.userEmail === info.email) && (user.userPwd === info.pwd)) {
                $location.url("/dashboard")
            }
            else {
                $scope.loginError = true;
            }
        });
    }
})