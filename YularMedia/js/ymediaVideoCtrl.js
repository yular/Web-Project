ymediaApp
	.config(['$httpProvider', function($httpProvider) {
	        delete $httpProvider.defaults.headers.common['X-Requested-With'];
	        $httpProvider.defaults.useXDomain = true;
	}])
	.controller('ymediaVideoCtrl', ['$scope', '$http', '$interval', '$location', '$sce', function($scope, $http, $interval, $location, $sce, $window) {

		$scope.config = {
			sources: [
				{
					src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), 
					type: "video/mp4"
				},
				{
					src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), 
					type: "video/webm"
				},
				{
					src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), 
					type: "video/ogg"
				}
			],
			tracks: [
				{
					src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
					kind: "subtitles",
					srclang: "en",
					label: "English",
					default: ""
				}
			],
			theme: "node_modules/videogular-themes-default/videogular.css",
			plugins: {
				poster: "http://www.videogular.com/assets/images/videogular.png"
			}
		}

	    var init = function () {

	    	console.log("3");

	    }

	    init();

  	}]);