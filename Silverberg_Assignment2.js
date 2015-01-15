//Rayme Silverberg
//SDI
//Project 2

alert("It was a dark and stormy night. You approach a mysterious alley...");//Start

var myName = prompt("What is your name?", "");//Setting my stringg variable
var num = 15;// Setting number variable
var hearNoise = confirm("Are you scared " + myName + " ?");//Setting my boolean variable
var myPrompt = prompt("What are you afraid of?", "");

function yourFears(args) {
    if (args==="monsters" || args==="zombies" || args==="vampires") {
        console.log("Monsters arent real?");
    } else {
        console.log("No worries then. Mwahahahaha...");
    }
}

yourFears(myPrompt);

var walkDownAlley = confirm("Are you ready to proceed through the alley?");

function theWalk(args) {
    var stepsToTake= 20;
    while (stepsToTake >= 0){
        console.log("You have "+ stepsToTake + " steps to take.");
        stepsToTake--;
        if (stepsToTake === 20) {
            console.log("You have no more steps to take! You have survived the journey through the creepy alley.");
        }
    }
}
