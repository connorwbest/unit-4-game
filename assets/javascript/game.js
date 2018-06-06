//variables
var counter = 0;
var target = Math.floor(Math.random() * 121) + 1;
var wins = 0;
var losses = 0;
var stonevalue = Math.floor(Math.random() * 13);
var crystalValues = [];



var start = function () {
    $('#startAudio').trigger('play');
    $('#counter').text("Your Score: " + counter);
    $('#goal').text("Target Number: " + target);
    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);

    for (i = 0; i < 4; i++) {
        randValues = Math.floor(Math.random() * 13) + 1;
        crystalValues.push(randValues);
    }
    console.log(crystalValues);

    $('#start').hide();
}

var winLose = function () {
    if (target === counter) {
        wins++;
        $('#wins').text("Wins: " + wins);
        alert("You have saved the Universe, for now.");
        reset();
    }

    else if (counter > target) {
        losses++;
        $('#losses').text("Losses: " + losses);
        alert("Thanos has destroyed our Universe");
        reset();
    }
}

var reset = function () {
    counter = 0;
    target = Math.floor(Math.random() * 121) + 1;
    crystalValues = [];
    $('#counter').text("Your Score: " + counter);
    $('#goal').text("Target Number: " + target);
    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);

    for (i = 0; i < 4; i++) {
        randValues = Math.floor(Math.random() * 13) + 1;
        crystalValues.push(randValues);
        console.log(crystalValues);

    }
}



$('#start').on('click', function () {


    start();




    $('#stone1').on('click', function () {
        counter += crystalValues[0];
        $('#counter').text("Your Score: " + counter)
        console.log(counter);
        winLose();
    });

    $('#stone2').on('click', function () {
        counter += crystalValues[1];
        $('#counter').text("Your Score: " + counter)
        console.log(counter);
        winLose();
    });

    $('#stone3').on('click', function () {
        counter += crystalValues[2];
        $('#counter').text("Your Score: " + counter)
        console.log(counter);
        winLose();
    });

    $('#stone4').on('click', function () {
        counter += crystalValues[3];
        $('#counter').text("Your Score: " + counter)
        console.log(counter);
        winLose();
    });

























});
