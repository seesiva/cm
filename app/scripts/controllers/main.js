'use strict';

angular.module('cmApp')
    .controller('MainCtrl', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation == $location.path();
        };
              
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.aboutMeItems = [
            'Currently working in Scintel Technologies',
            'Education: Management, Engineering',
            'Skills: Project Management, Agile, Programming, Business Intelligence'
        ];
        $scope.contactItems = [
            'Email: seesiva@gmail.com',
            'Blog: sivaanalytics.wordpress.com',
            'Google IM: seesiva',
            'Twitter Handle: seesiva' ];

    })
 .controller('PeopleCtrl', function ($http,$scope, $modal) {
     var modalInstance;
    $scope.form = {};
    $scope.headers = ["EmpId", "FirstName", " LastName", "Email", "Mobile"];
    $scope.people = [
    { "EmpID" : "ABC-01-020", "FirstName" : "Jagadish Babu", "LastName" : "SVS","Email":"svs.jagadish@abc.com","Mobile":"12312321" },
    { "EmpID" : "ABC-01-052", "FirstName" : "Jayaraju", "LastName" : "PJ","Email":"pj.jayaraju@abc.com","Mobile":"12312321" }
  ];
 $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'views/PeopleAdd.html',
      controller: 'PeopleCtrl',
      resolve: {
        people: function () {
          return $scope.people;
        }
      }
    });
      modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
  $scope.addPeople = function () {
    $http.post('/contact', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
 });