//Create global arrays for wins and losses.
var winCount = 0;
var lossCount = 0;
var currentTotal = 0;


//Function to start game, and place hidden value inside target
function inititializeGame() {
    //Create array with min value of 19 and max of 130
    var targetValue = Math.floor(Math.random() * Math.floor(110) + 20);
    console.log("target random value is " + targetValue);
    var targetContainer = $("#target");
    $("#target").innerHTML = targetValue;
    // need to finish this function
}

var btnContainer = document.getElementById('crystal');

//Function to create buttons for each of the crystals.
function createButtons() {

    //Array for buttons.
    var crystals = ["crystal1", "crystal2", "crystal3", "crystal4"];
    for (var i = 0; i < crystals.length; i++) {
        //variables used in function
        var currentCrystal = crystals[i];
        var crystalButton = document.createElement('button');

        //Function to assign random values to each crystal (1-12).
        var crystalValue = Math.floor(Math.random() * Math.floor(12) + 1);
        console.log("this random value is " + crystalValue);

        //apply styling here
        $("#crystal").addClass('crystal-button');
        $("#crystal").addClass('btn');
        $("#crystal").addClass('btn-outline-info');
        $("#crystal").addClass('hide-value');

        crystalButton.innerHTML = currentCrystal;

        //apply event listener
        crystalButton.value = crystalValue;
        crystalButton.addEventListener("click", addValue);
        btnContainer.appendChild(crystalButton);
    }

}

//Function to add value of crystal pressed to total
function addValue() {
    var userTotal = parseInt(currentTotal) + parseInt(btnContainer.value);
    console.log(userTotal);
    return userTotal;
}

function checkGameStatus() {
    var gameWon = true;
    //If user is still below targetValue
    if (currentTotal < targetValue) {
        gameWon = false; 
        break;
    }
    //If user adds correctly
    else if (currentTotal == targetValue) {
        var winner = document.getElementById('winner');
            winner.style.display= "block";
            winCount++;
    }
    //If user user goes over targetValue
    else if (currentTotal > targetValue) {
        var loser = document.getElementById('loser');
            loser.style.display= "block";
            lossCount++;
    }
}

inititializeGame();
createButtons();
checkGameStatus();