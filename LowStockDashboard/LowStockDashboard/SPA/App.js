var Application = (function () {
    Application.config = {
        api: "http://localhost/LowStockApi/api/"
    }
    Application.initialize = function () {
        angular.module("SPA.App", ["ui.router", "ui.bootstrap", "chart.js"])
            .controller(Application.ShellController.$type, Application.ShellController)
            .controller(Application.MainController.$type, Application.MainController)
            .controller(Application.GridController.$type, Application.GridController)
            .controller(Application.ViewProductController.$type, Application.ViewProductController)
            .service(ApiService.$type, ApiService)

            .config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function ($stateProvider, $urlRouterProvider, $httpProvider) {
                $stateProvider
                    .state("shell", {
                        cache: false,
                        abstract: true,
                        views: {
                            "Shell-Root": {
                                templateUrl: "SPA/Views/Shell.html",
                                controller: Application.ShellController.$type
                            }
                        }                        
                    })
                    .state("shell.main", {
                        cache: false,
                        url: "/",
                        views: {
                            "Shell-Body": {
                                templateUrl: "SPA/Views/Main.html",
                                controller: Application.MainController.$type
                            }
                        }                        
                    })
                    .state("shell.grid", {
                        cache: false,
                        url: "/grid",
                        views: {
                            "Shell-Body": {
                                templateUrl: "SPA/Views/Grid.html",
                                controller: Application.GridController.$type
                            }
                        }
                    })

                $urlRouterProvider.otherwise("/");
            }]);
    }
    return Application;
})();