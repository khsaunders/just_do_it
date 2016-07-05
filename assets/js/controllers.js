mainApp.controller('thingsCtrl', function($scope){

  $scope.things = [] //empty array

  var thingText = $('input[class="toDo-thing-input"]').val();

  $scope.addThing = function (){
    $scope.things.push({'title': $scope.newThing, 'done': false})
    $scope.newThing = ''
  }

  $scope.deleteThing = function(index){
    $scope.skills.splice(index, 1);
  }

});

//nghover on li show x to delete item

//ng double click
  //dropdown input, add details
  
