(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:boardCtrl
	* @description
	* # boardCtrl
	* Controller of the app
	*/

  	angular
		.module('board')
		.controller('BoardCtrl', Board);

		Board.$inject = ['BoardService', 'OfficeService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Board(BoardService, OfficeService) {
			/*jshint validthis: true */
			var vm = this;

			vm.nome = "teste";


		}

})();
