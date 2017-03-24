var ApiService = function ($http) {
    var result;
    this.GetApiCall = function (controllerName, method, callback) {
        var url = Application.config.api + controllerName + '/' + method;
        result = $http.get(url).then(
           function (response) {
               var event = {
                   result: response.data,
                   hasErrors: false
               };
               callback(event);
           }, function (failure) {
                var event = {
                    result: "",
                    hasErrors: true,
                    error: failure.data
                };
                callback(event);
            }
        );
    }
}

ApiService.$type = "$locationsService";
ApiService.$inject = ["$http"];