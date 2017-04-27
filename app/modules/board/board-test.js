(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:boardTest
	 * @description
	 * # boardTest
	 * Test of the app
	 */

	describe('board test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('financial');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('BoardCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
