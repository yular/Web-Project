ymediaApp
	.config(['$httpProvider', function($httpProvider) {
	        delete $httpProvider.defaults.headers.common['X-Requested-With'];
	        $httpProvider.defaults.useXDomain = true;
	}])
	.controller('ymediaMainCtrl', ['$scope', '$http', '$interval', '$location', '$sce', function($scope, $http, $interval, $location, $sce, $window) {

	    var init = function () {

	    	console.log("1");

	    }

	    init();

  	}]);