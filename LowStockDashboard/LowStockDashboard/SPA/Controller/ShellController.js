var Application = Application || {};

Application.ShellController = function ($scope, $state, $locationsService) {
    $scope.models = {
        locations: [
            
        ]
    };

    $scope.selectedLocation = null;

    $scope.changeLocation = function (loc) {
        $scope.selectedLocation = loc;
    }

    function GetLocations() {
        $locationsService.GetApiCall("Locations", "GetLocations", function (event) {
            if (event.hasErrors == true) {
                alert("Error Getting Locations" + event.error);
            } else {
                $scope.models.locations = event.result;
                if ($scope.models.locations.length > 0) {
                    $scope.selectedLocation = $scope.models.locations[0];
                }
            }
        });
    }
    GetLocations();
}

Application.ShellController.$inject = ["$scope", "$state", "$locationsService"];
Application.ShellController.$type = "ShellController";