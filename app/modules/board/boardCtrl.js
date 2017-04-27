(function () {
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

	Board.$inject = ['BoardService', 'OfficeService', '$scope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Board(BoardService, Office, $scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.nome = "teste";

		$scope.selected = [];

		$scope.query = {
			order: 'payed',
			limit: 5,
			page: 1
		};

		var newOffice = new Office({
            payed: true,
            payIn: '12/12/2017',
            description: 'uma descrição',
            category: 'uma categoria',
            value: 1000
        });
	}

})();
