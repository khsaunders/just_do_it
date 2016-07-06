// credit: controller code based on a codepen by Francesca, https://codepen.io/gfrancesca/pen/gbpoxQ
var myApp =  angular.module("mainApp"); //this seemed to resolve errors about controllers 'getting undefined'
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

  $scope.addNotes = function(){
    $scope.things.push({'description': $scope.newThing.title, 'done':false})
    $scope.newThing.title = ''
  }


  // $scope.checkThing = function(){
  //   $scope.things.css('color', '$headerred');
  // } //according to the angularjs documentation, this can be handled within the html

});

mainApp.controller('quotesCtrl', function($scope, $http){ //initially forgot to add http to my scope; was getting 'undefined' error. this resolved it.

  $http.get(' http://quotes.rest/qod.json').success(function(data){
    $scope.newQuote=data;
    console.log(data)

  $scope.quotes = []

  $scope.quotes.push({'quote': $scope.newQuote, 'done': false})
  $scope.newQuote = ''

})

});



//ng double click--can call functions
  //dropdown input, add details

//DONE //add checkbox to li's. string type of checkbox model allows the checkbox to bind to data, according to angular's documenttion.
//apparently the <input type = "checkbox"> html was ready to go, right out of the box.

//DONE //event listener in ng: turn checked off item blue

//add random quote generator. api documentation: https://theysaidso.com/api/#random
