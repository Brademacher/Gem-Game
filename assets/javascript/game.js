//Create arrays for crystal value and random number value.
var crystals = [
    "crystal1",
    "crystal2",
    "crystal3",
    "crystal4"
];

//Create array with min value of 19 and max of 130
var targetValue = [];
for (var i = 19; i <= 130; i++) {
    console.log("targetValue works");
    targetValue.push(i);
}

var btnContainer = $("crystal");

//Create buttons for each of the crystals.
function createButtons() {
    for (var i = 0; i < crystals.length; i++) {
        //variables used in function
        var currentCrystal = crystals[i];
        var crystalButton = document.createElement('button');
        
        //apply styling here
        $("#crystals").addClass('crystal-button');
        $("#crystals").addClass('btn');
        $("#crystals").addClass('btn-outline-info');

        //apply event listener
        crystalButton.value = currentCrystal;
        crystalButton.on("click", addValue);
        console.log("you can press " + (this));
    }
}

createButtons();

//Function to generate target value (19-130) and insert it into the target box.


    //assign classes to crystal so they can be given stylings.

    //Function to assigns random values to each crystal (1-12).

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
