'use strict';

//Map routes to the respective templates and controllers

angular.module('cmApp', ['ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
          .when('/home', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'MainCtrl'
            })
           .when('/people', {
                templateUrl: 'views/people.html',
                controller: 'PeopleCtrl'
            })
           .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'MainCtrl'
            })
           .when('/ContactMe', {
                templateUrl: 'views/contact.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });