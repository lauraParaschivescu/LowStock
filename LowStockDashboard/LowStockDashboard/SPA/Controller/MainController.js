var Application = Application || {};

Application.MainController = function ($scope, $state) {
    $scope.myVariable = "hello there";

    $scope.goToGrid = function () {
        $state.go("shell.grid");
    }
}

Application.MainController.$inject = ["$scope", "$state"];
Application.MainController.$type = "MainController";