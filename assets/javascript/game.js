//Create global arrays for wins and losses.
var winCount = 0;
var lossCount = 0;
var currentTotal = 0;

//Function to start game, and place hidden value inside target
function inititializeGame() {
    //Create array with min value of 19 and max of 130
    var targetValue = Math.floor(Math.random() * Math.floor(110)+20);
    console.log("this random value is " + targetValue);
    var targetContainer = $("#target");
    targetContainer.innerHTML = "";
    // need to finish this function
}

//Array for buttons.
var crystals = [
    "crystal1",
    "crystal2",
    "crystal3",
    "crystal4"
];
var btnContainer = document.getElementById('crystal');

//Function to create buttons for each of the crystals.
function createButtons() {
    for (var i = 0; i < crystals.length; i++) {
        //variables used in function
        var currentCrystal = crystals[i];
        var crystalButton = document.createElement('button');
        //Give buttons an image
        for (var j = 0; j < crystals.length; j++) {
            currentCrystal[j].innerHTML = '<img src="./assets/css/Images/Crystal.png" alt="Cystal-Image">';
        }
        
        //Function to assign random values to each crystal (1-12).
        var crystalValue = Math.floor(Math.random() * Math.floor(12)+1);
        console.log("this random value is " + crystalValue);

        //apply styling here
        $("#crystal").addClass('crystal-button');
        $("#crystal").addClass('btn');
        $("#crystal").addClass('btn-outline-info');
        $("#crystal").addClass('hide-value');

        $("#crystal").innerHTML = currentCrystal;
        
        //apply event listener
        crystalButton.value = crystalValue;
        crystalButton.addEventListener("click", addValue);
        btnContainer.appendChild(crystalButton);
    }
}

createButtons();

//Function to add value of crystal pressed to total
function addValue () {
    var userTotal = parseInt(currentTotal) + parseInt(cystalValue);
    console.log(addValue);
    return userTotal;
}
//onClick of each crystal do if/else function to determine if the current value is <, ==, or > target value.
    //if (current < target) {
       // return;
    //}

    //else if (current > target) {
       // lose
    //}

    //else if (current == target) {
       // win
    //}
