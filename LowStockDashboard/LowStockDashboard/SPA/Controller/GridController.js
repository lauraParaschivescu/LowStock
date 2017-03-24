var Application = Application || {};

Application.GridController = function ($scope, $state, $uibModal) {
    $scope.data = {
        lowstockdata: {
            totalitems: 726,
            currentPage: 1,
            itemsperpage: 5,
            data: []
        }
    };    

    function getData() {
        $scope.data.lowstockdata.data = [];
        for (i = 0; i < $scope.data.lowstockdata.itemsperpage; i++) {
            var currentLocation = $scope.selectedLocation.Location;

            var rndNum = ($scope.data.lowstockdata.currentPage * 10) + i;

            $scope.data.lowstockdata.data.push({
                SKU: "SKU" + rndNum,
                ProductTitle: "Product Title " + rndNum,
                OnOrder: rndNum * 2,
                Due: rndNum - 1,
                StockLevel: rndNum,
                Location: currentLocation
            });
        }
    }
    getData();

    $scope.pageChanged = function () {
        getData();
    }

    $scope.$watch('selectedLocation', function () {
        $scope.data.lowstockdata.currentPage = 1;
        getData();
    });

    $scope.openProduct = function (product) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: "SPA/Views/ViewProductWindow.html",
            controller: "ViewProductController",
            size: "",
            resolve: {
                data: product
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.data.lowstockdata.selectedItem = selectedItem;
        }, function () {
            console.log("Modal dismissed at ", new Date());
        });
    }
}

Application.GridController.$inject = ["$scope", "$state", "$uibModal"];
Application.GridController.$type = "GridController";