/**
 * Created by rei09055 on 2/21/2015.
 */
(function () {
    'use strict';

    angular.module('checkin').config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/checkin', {
                    templateUrl: 'checkin/views/checkin.html'
                    //controller: 'DiscountListCtrl'
                }).
                //when('/admin', {
                //    templateUrl: 'admin/views/detail.html'
                //    controller: 'DiscountDetailCtrl'
                //}).
                otherwise({
                    redirectTo: '/'
                });
        }]);
    /**
     * Created by rei09055 on 2/12/2015.
     */
})();
