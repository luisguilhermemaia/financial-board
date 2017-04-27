(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:boardService
	 * @description
	 * # boardService
	 * Service of the app
	 */

  	angular
		.module('board')
		.factory('BoardService', Board);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Board.$inject = ['$http'];

		function Board ($http) {
			return{
				teste: 2
			}
		}

})();
