// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.users = [{
    name: 'Luke Skywalker',
    address: {
      street: 'PO Box 123',
      city: 'Secret Rebel Base',
      planet: 'Yavin 4'
    },
    friends: [
      'Han',
      'Leia',
      'Chewacca'
      ]
  },
  {
    name: 'Han Solo',
    address: {
      street: 'PO Box 1234',
      city: 'Rebel Base',
      planet: 'Yavin 22'
    },
    friends: [
      'Luke Skywalker',
      'Leia',
      'Chewacca'
      ]
  }]
  
});

angular.module('app').directive('userInfoCard', function() {
  return{
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      user: '='
    },
    controller: function ($scope){
      $scope.collapsed = false;
      $scope.selectUser = function(user){
        $scope.selectedUser = user;
        console.log(user);
      }
      $scope.collapse = function(el){
        console.log(el);
        $scope.collapsed = !$scope.collapsed;
      }
    }
  }
})