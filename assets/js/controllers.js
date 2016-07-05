// credit: controller code based on a codepen by Francesca, https://codepen.io/gfrancesca/pen/gbpoxQ

mainApp.controller('thingsCtrl', function($scope){

  $scope.things = [] //empty array

  // var thingText = $('input[class="toDo-thing-input"]').val(); unnecessary because of templating

  $scope.addThing = function (){
    $scope.things.push({'title': $scope.newThing, 'done': false})
    $scope.newThing = ''
  }

  $scope.deleteThing = function(index){

    $scope.things.splice(index, 1); //remove item from index
  }



});

/*--------------failed delete attempt-----------------------------------*/

// mainApp.controller('deleteCtrl', function($scope){
//
//   $scope.things = []
//
//   $scope.deleteThing = function(){
//     $scope.skills.splice(index, 1);
//    }
//
// console.log('delete ready')

//nghover on li show x to delete item

//ng double click
  //dropdown input, add details
