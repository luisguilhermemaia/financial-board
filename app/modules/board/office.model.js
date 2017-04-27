(function () {
    'use strict';

    angular
        .module('board')
        .factory('Office', OfficeFactory);

    function OfficeFactory() {
        function Office(config) {
            this.payed = config.payed;
            //...
        }

        return Office;
    }

})();
