ymediaApp
	.config(['$httpProvider', function($httpProvider) {
	        delete $httpProvider.defaults.headers.common['X-Requested-With'];
	        $httpProvider.defaults.useXDomain = true;
	}])
	.controller('ymediaMusicCtrl', ['$scope', '$http', '$interval', '$location', '$sce',function($scope, $http, $interval, $location, $sce, $window) {

		$scope.musicUrl = "MediaBase/Music/名侦探柯南 - 盛开在遗忘之后.mp3";
		$scope.requestSongSelected = null;

		$scope.songlist = [
			{
				id: 0,
				name: "名侦探柯南 - 盛开在遗忘之后.mp3",
				src: "MediaBase/Music/名侦探柯南 - 盛开在遗忘之后.mp3"
			},
			{
				id: 1,
				name: "伊藤由奈 - Trust You.mp3",
				src: "MediaBase/Music/伊藤由奈 - Trust You.mp3",
			},
			{
				id: 2,
				name: "陈浩民 - 宠物小灵精.mp3",
				src: "MediaBase/Music/陈浩民 - 宠物小灵精.mp3",
			},
			{
				id: 3,
				name: "周杰伦 - 稻香.mp3",
				src: "MediaBase/Music/周杰伦 - 稻香.mp3",
			},
			{
				id: 4,
				name: "高达 - Fields Of Hope.mp3",
				src: "MediaBase/Music/高达 - Fields Of Hope.mp3"
			}
		];

		$scope.config = {
			sources: [
				{
					src: $sce.trustAsResourceUrl($scope.musicUrl), 
					type: "audio/mpeg"
				}
			],
			theme: "node_modules/videogular-themes-default/videogular.css"
		}

/*		$scope.musiclist = [
			{
				sources: [
					{
						src: $sce.trustAsResourceUrl("MediaBase/Music/名侦探柯南 - 盛开在遗忘之后.mp3"), 
						type: "audio/mpeg"
					}
				],
				theme: "node_modules/videogular-themes-default/videogular.css"
			},
			{
				sources: [
					{
						src: $sce.trustAsResourceUrl("MediaBase/Music/伊藤由奈 - Trust You.mp3"), 
						type: "audio/mpeg"
					}
				],
				theme: "node_modules/videogular-themes-default/videogular.css"
			},
			{
				sources: [
					{
						src: $sce.trustAsResourceUrl("MediaBase/Music/陈浩民 - 宠物小灵精.mp3"), 
						type: "audio/mpeg"
					}
				],
				theme: "node_modules/videogular-themes-default/videogular.css"
			},
			{
				sources: [
					{
						src: $sce.trustAsResourceUrl("MediaBase/Music/周杰伦 - 稻香.mp3"), 
						type: "audio/mpeg"
					}
				],
				theme: "node_modules/videogular-themes-default/videogular.css"
			},
			{
				sources: [
					{
						src: $sce.trustAsResourceUrl("MediaBase/Music/高达 - Fields Of Hope.mp3"), 
						type: "audio/mpeg"
					}
				],
				theme: "node_modules/videogular-themes-default/videogular.css"
			}
		];
*/

		$scope.requestHighlight = function(id) {
            if ($scope.requestSongSelected === id) {
                $scope.requestTableSelected = null;
            } else {
            	$scope.musicUrl = $scope.songlist[id].src;
                $scope.requestSongSelected = id;
                $scope.config = {
					sources: [
						{
							src: $sce.trustAsResourceUrl($scope.musicUrl), 
							type: "audio/mpeg"
						}
					],
					theme: "node_modules/videogular-themes-default/videogular.css"
				};
                console.log($scope.musicUrl);
                console.log($scope.config);
            }
        };

	    var init = function () {

	    	console.log("2");

	    }

	    init();

  	}]);

 //http://www.videogular.com/examples/creating-an-audio-player/