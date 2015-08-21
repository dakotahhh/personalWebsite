var site = angular.module('dakotahReyes', ['ngRoute']);

site.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'home.html'
			}).
			when('/portfolio', {
				templateUrl: 'home.html'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}
]);