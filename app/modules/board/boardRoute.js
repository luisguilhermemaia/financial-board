'use strict';

/**
 * @ngdoc function
 * @name app.route:boardRoute
 * @description
 * # boardRoute
 * Route of the app
 */

angular.module('board')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.board', {
				url:'/board',
				templateUrl: 'app/modules/board/board.html',
				controller: 'BoardCtrl',
				controllerAs: 'vm'
			});

		
	}]);
