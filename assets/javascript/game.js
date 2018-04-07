//Create global arrays for wins and losses.
var winCount = 0;
var lossCount = 0;
var currentTotal = 0;
var targetValue = 0;
var isGameInProgress = true;
    //Array for buttons.
    var crystals = ["crystal1", "crystal2", "crystal3", "crystal4"];

//Function to start game, and place hidden value inside target
function initializeGame() {
    //Create array with min value of 19 and max of 130
    targetValue = Math.floor(Math.random() * Math.floor(110) + 20);
    console.log("target random value is " + targetValue);
    $("#target").html(targetValue);
    currentTotal = 0;
    $("#currentTotal").html(currentTotal);
    $("#count").html('Wins:' + winCount + '/' + 'Losses:' + lossCount);
    $('#wins').hide();
    $('#losses').hide();
    checkGameStatus();
    isGameInProgress = true;
    assignCrystalValues();
}



//Function to create buttons for each of the crystals.
function createButtons() {
    var btnContainer = document.getElementById('crystal');

    for (var i = 0; i < crystals.length; i++) {
        //variables used in function
        var currentCrystal = crystals[i];
        var crystalButton = document.createElement('img');
        crystalButton.src = './assets/css/Images/Crystal.png'

        //apply styling here
        $(crystalButton).addClass('crystal-button');
        $(crystalButton).addClass('btn');
        $(crystalButton).addClass('col-xs-6');
        $(crystalButton).addClass('col-sm-6');
        $(crystalButton).addClass('col-md-3');
        $(crystalButton).addClass('col-lg-3');
        $(crystalButton).attr('id', currentCrystal);

        //apply event listener
        crystalButton.addEventListener("click", addValue);
        btnContainer.appendChild(crystalButton);
    }
}

function assignCrystalValues() {
    for (var i = 0; i < crystals.length; i++) {
      //Function to assign random values to each crystal (1-12).
      var crystalValue = Math.floor(Math.random() * Math.floor(12) + 1);
      console.log("this random value is " + crystalValue);
      $("#"+crystals[i]).attr('data-value', crystalValue);
    }
}

//Function to add value of crystal pressed to total
function addValue(ev) {
    console.log(this);
    currentTotal = parseInt(currentTotal) + parseInt($(this).attr('data-value'));
    console.log(currentTotal);
    $("#currentTotal").html(currentTotal);
    checkGameStatus();

}

function checkGameStatus() {

    if (!isGameInProgress) {
        return;
    }
    //If user adds correctly
    if (currentTotal == targetValue) {
        $('#wins').show();
        winCount++;
        isGameInProgress = false;

    }

    //If user user goes over targetValue
    if (currentTotal > targetValue) {
        $('#losses').show();
        lossCount++;
        isGameInProgress = false;

    }
    $("#count").html('Wins: ' + winCount + ' ' + 'Losses: ' + lossCount);
}

createButtons();
initializeGame();