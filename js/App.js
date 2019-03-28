// var testApp = angular.module("testApp", []).config(function($sceProvider) {
//   // Completely disable SCE.  For demonstration purposes only!
//   // Do not use in new projects.
//   $sceProvider.enabled(false);
// });


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.name = "abs";
});
