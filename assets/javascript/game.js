$(document).ready(function () {
    // initial wins, losses, userScore set to 0
    var wins = 0;
    var losses = 0;
    var userScore = 0;

    // send these values to appear on html page
    $("#winsDiv").append("<p>Wins: </p>" + wins);
    $("#lossesDiv").append("<p>Losses: </p>" + losses);
    $("#playerScoreDiv").append("<p>Your Total Score is: </p>" + userScore);

    // make computer choose random number from 19-120
    var computerCount = (Math.floor(Math.random() * 101) + 19);
    // send that random number to the Computer Choice div
    $("#computerScoreDiv").append("<p>Computer Choice is: </p>" + computerCount);

    // make each crystal image a random number from 1-12
    var purple = (Math.floor(Math.random() * 11) + 1);
    var blue = (Math.floor(Math.random() * 11) + 1);
    var green = (Math.floor(Math.random() * 11) + 1);
    var white = (Math.floor(Math.random() * 11) + 1);

    // reset function to run restart without refreshing page
    function reset() {
        // make computer choose new random number from 19-120
        computerCount = (Math.floor(Math.random() * 101) + 19);
        $("#computerScoreDiv").html("<p>Computer Choice is: </p>" + computerCount);
        // make each crystal image a new random number from 1-12
        purple = (Math.floor(Math.random() * 11) + 1);
        blue = (Math.floor(Math.random() * 11) + 1);
        green = (Math.floor(Math.random() * 11) + 1);
        white = (Math.floor(Math.random() * 11) + 1);
        // reset userScore to 0
        userScore = 0;
        // push new score to html
        $("#playerScoreDiv").html("<p>Your Total Score is: </p>" + userScore);
    };
    // purple crystal click function
    $(".purplecrystal").on("click", function () {
        // selecting purple button and add data named Purple--given value of var purple
        $(".purplecrystal").data("purple", purple);
        // new userScore value adds value of purple if clicked
        userScore = userScore + purple;
        $("#playerScoreDiv").html("<p>Your Total Score is: </p>" + userScore);
        // if user got to computer score, run wins function, else if user passed computerChoice run lose function
        if (userScore === computerCount) {
            win();
        } else if (userScore > computerCount) {
            lose();
        };

    });

    // blue crystal click function
    $(".bluecrystal").on("click", function () {
        $(".bluecrystal").data("blue", blue);
        userScore = userScore + blue;
        $("#playerScoreDiv").html("<p>Your Total Score is: </p>" + userScore);
         // if user got to computer score, run wins function, else if user passed computerChoice run lose function
        if (userScore === computerCount) {
            win();
        } else if (userScore > computerCount) {
            lose();
        };

    });

    // green crystal click function
    $(".greencrystal").on("click", function () {
        $(".greencrystal").data("green", green);
        userScore = userScore + green;
        $("#playerScoreDiv").html("<p>Your Total Score is: </p>" + userScore);
         // if user got to computer score, run wins function, else if user passed computerChoice run lose function
        if (userScore === computerCount) {
            win();
        } else if (userScore > computerCount) {
            lose();
        };

    });


    // white crystal click function
    $(".whitecrystal").on("click", function () {
        $(".whitecrystal").data("white", white);
        userScore = userScore + white;
        $("#playerScoreDiv").html("<p>Your Total Score is: </p>" + userScore);
        // if user got to computer score, run wins function, else if user passed computerChoice run lose function
        if (userScore === computerCount) {
            win();
        } else if (userScore > computerCount) {
            lose();
        };
    });
    // call win function if user won
    function win() {
        wins++;
        // push wins to html and alert user of win/loss status
        $("#winsDiv").html("<p>Wins: </p>" + wins);
        alert("You beat the computer!");
        reset();
    };
// call lose function if user lost
    function lose() {
        losses++;
        // push losses to html and alert user of win/loss status
         $("#lossesDiv").html("<p>Losses: </p>" + losses);
         alert("Looks like the computer outsmarted you this time.");
        reset();
    };

});