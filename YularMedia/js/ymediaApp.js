var ymediaApp = angular.module('YMediaApp', 
								['ngResource', 'ngRoute', 'ngAnimate', 'ngSanitize', 'com.2fdevs.videogular',
								 'com.2fdevs.videogular.plugins.controls','com.2fdevs.videogular.plugins.overlayplay',
								 'com.2fdevs.videogular.plugins.poster'
								]);

ymediaApp.factory('YMediaApp', ['$resource', function ($resource) {

}]);

ymediaApp.run(['$rootScope', function ($rootScope) {

}]);

ymediaApp.config(['$routeProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'ymediaMainCtrl'
        })
        .when('/music', {
            templateUrl: 'pages/music.html',
            controller: 'ymediaMusicCtrl'
        })
        .when('/video', {
            templateUrl: 'pages/video.html',
            controller: 'ymediaVideoCtrl'
        })
        .otherwise({
            templateUrl: 'pages/404.html'
        });
}]);