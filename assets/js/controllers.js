// credit: controller code based on a codepen by Francesca, https://codepen.io/gfrancesca/pen/gbpoxQ
var myApp =  angular.module("mainApp"); //this seemed to resolve errors about controllers 'getting undefined'
mainApp.controller('thingsCtrl', function($scope){

  $scope.things = [] //empty array that to-do items will be pushed to

  // var thingText = $('input[class="toDo-thing-input"]').val(); unnecessary because of templating

  $scope.addThing = function (){
    $scope.things.push({'title': $scope.newThing, 'done': false})
    $scope.newThing = ''
  }

  $scope.deleteThing = function(index){

     //remove item from to-do list
    $scope.things.splice(index, 1);
  }

  $scope.addNotes = function(){
    $scope.things.push({'description': $scope.newThing.title, 'done':false})
    $scope.newThing.title = ''
  }


  // $scope.checkThing = function(){
  //   $scope.things.css('color', '$headerred');
  // } //according to the angularjs documentation, this can be handled within the html

});

//Shia LeBouf motivational quote generator

// mainApp.controller('quotesCtrl', function($scope, $http){ //initially forgot to add http to my scope; was getting 'undefined' error. this resolved it.
//   var url = ' http://localhost:3000/inspiration'
//
//   $http.get(url).success(function(data){
//     $scope.quotes = data;
//     console.log(data)
//     console.log(data.inspiration.quote.img);
// //successful api call. logs data successfully.
//
// // mainApp.controller('genQuoteCtrl', function($scope){
//     angular.forEach($scope.quotes, function(item){
//      return(item.contents);
//
//      console.log(item.contents.quotes);

      // $scope.quotes.push({'quote': $scope.newQuote, 'active': true})

// })      // $scope.newQuote = ''

// });



  // $scope.quotes = []
  //
  // $scope.quotes.push({'quote': $scope.newQuote, 'active': true})
  // $scope.newQuote = ''

// });




//ng double click--can call functions
  //dropdown input, add details

//DONE //add checkbox to li's. string type of checkbox model allows the checkbox to bind to data, according to angular's documenttion.
//apparently the <input type = "checkbox"> html was ready to go, right out of the box.

//DONE //event listener in ng: turn checked off item blue

//DONE //add quote generator. api documentation: https://theysaidso.com/api/#random

//randomize quotes, then append to page.
