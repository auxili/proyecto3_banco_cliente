app.config(function($routeProvider) {
    $routeProvider.when("/sucursalBancaria/new", //Ruta que usaremos para que cargue
            {
                templateUrl: "sucursalbancaria/detail.html", //Pagina que hay que cargar
                controller: "SucursalBancariaNewController"         //Controlador que hay que cargar
            }
    );
});

app.controller('SucursalBancariaNewController', function($scope, $http, urlBase, $location) {

    $scope.sucursalBancaria = null;

    $scope.insert = function() {

        $http.post(urlBase + "/api/SucursalBancaria/", $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/sucursalBancaria/search");
    };
    $scope.buttonOK = function() {
        $scope.insert();
    };
});
