$(document).ready(function(){
// call reset function at the beginning/end of each game
reset();

function reset(){
// make computer choose random number from 19-120
var computerCount= (Math.floor(Math.random() * 101) + 19);
// make each crystal image a random number from 1-12
var purple = (Math.floor(Math.random() * 11) + 1);
var blue = (Math.floor(Math.random() * 11) + 1);
var green = (Math.floor(Math.random() * 11) + 1);
var white = (Math.floor(Math.random() * 11) + 1);
var userScore=0;
}
// initial wins and losses are 0, this does not reset
var wins=0;
var losses = 0;

// make each image push number tied to it to the user score div

$(".purplecrystal").on("click", function(){
    $(".purplecrystal").attr("value");
    userScore = userScore + purple;
    console.log(userScore);
    $("#playerScoreDiv").innerHTML("<p>Your Total Score is: </p>" + userScore);
 

});

$(".bluecrystal").on("click", function(){
    $(".bluecrystal").attr("value");
    userScore= userScore + blue;
    console.log(userScore);
    $("#playerScoreDiv").innerHTML("<p>Your Total Score is: </p>" + userScore);

    
 
});

$(".greencrystal").on("click", function(){
    $(".greencrystal").attr(green);
    userScore= userScore + green;
    $("#playerScoreDiv").innerHTML("<p>Your Total Score is: </p>" + userScore);
   

});

$(".whitecrystal").on("click", function(){
    $(".whitecrystal").attr(white);
    userScore = userScore + white;
    $("#playerScoreDiv").innerHTML("<p>Your Total Score is: </p>" + userScore); 

});










});