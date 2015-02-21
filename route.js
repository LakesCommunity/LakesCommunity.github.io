/**
 * Created by rei09055 on 2/21/2015.
 */
(function () {
    'use strict';

    angular.module('checkin').config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/checkin', {
                    templateUrl: 'test2.html'
                    //controller: 'DiscountListCtrl'
                }).
                when('/admin', {
                    templateUrl: 'test.html'
                    //controller: 'DiscountDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/checkin'
                });
        }]);
    /**
     * Created by rei09055 on 2/12/2015.
     */
})();
