(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:boardModule
	 * @description
	 * # boardModule
	 * Module of the app
	 */

  	angular
	  .module('board', ['md.data.table'])
	  .config(function ($mdIconProvider) {
            $mdIconProvider.iconSet('editor', '/app/assets/icons/editor-icons.svg'); 
        });

})();
