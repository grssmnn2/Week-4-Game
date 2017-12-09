$(document).ready(function(){
// initial wins, losses, userScore set to 0
var wins=0;
var losses = 0;
var userScore = 0;

// send these values to appear on html page
$("#winsLossesDiv").append("<p>Wins: </p>"+ wins);
$("#winsLossesDiv").append("<p>Losses: </p>"+ losses);
$("#playerScoreDiv").append("<p>Your Total Score is: </p>" + userScore);

// make computer choose random number from 19-120
var computerCount= (Math.floor(Math.random() * 101) + 19);
// send that random number to the Computer Choice div
$("#computerScoreDiv").append("<p>Computer Choice is: </p>" + computerCount);

// make each crystal image a random number from 1-12
var purple = (Math.floor(Math.random() * 11) + 1);
var blue = (Math.floor(Math.random() * 11) + 1);
var green = (Math.floor(Math.random() * 11) + 1);
var white = (Math.floor(Math.random() * 11) + 1);

// reset function to run restart without refreshing page
function reset(){
// make computer choose random number from 19-120
computerCount= (Math.floor(Math.random() * 101) + 19);
// send that random number to the Computer Choice div
$("#computerScoreDiv").append("<p>Computer Choice is: </p>" + computerCount);
// make each crystal image a new random number from 1-12
purple = (Math.floor(Math.random() * 11) + 1);
blue = (Math.floor(Math.random() * 11) + 1);
green = (Math.floor(Math.random() * 11) + 1);
white = (Math.floor(Math.random() * 11) + 1);
userScore = 0;
};

// purple crystal click function
$(".purplecrystal").on("click", function(){
    // selecting purple button and add data named Purple--given value of var purple
    $(".purplecrystal").data("purple", purple);
    userScore = userScore + purple;
   $("#playerScoreDiv").html("<p>Your Total Score is: </p>" + userScore);
 

});

// blue crystal click function
$(".bluecrystal").on("click", function(){
    $(".bluecrystal").data("blue",blue);
    userScore= userScore + blue;   
    $("#playerScoreDiv").html("<p>Your Total Score is: </p>" + userScore);
});

// green crystal click function
$(".greencrystal").on("click", function(){
    $(".greencrystal").data("green",green);
    userScore= userScore + green;
    $("#playerScoreDiv").html("<p>Your Total Score is: </p>" + userScore);
});


// white crystal click function
$(".whitecrystal").on("click", function(){
    $(".whitecrystal").data("white", white);   
    userScore = userScore + white;
    $("#playerScoreDiv").html("<p>Your Total Score is: </p>" + userScore);  

});

// increase wins and reset game
function win(){
    wins++;
    reset();
};
// increase losses and reset game
function lose(){
    losses++;
    reset();
};

// if user got to computer score, run wins function, else if user passed computerChoice run lose function
if (userScore === computerCount){
    win();

};

if (userScore > computerCount){
    lose();
};







});