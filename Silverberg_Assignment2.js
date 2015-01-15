//Rayme Silverberg
//SDI 01MDVB
//Assignment 2

alert("It was a dark and stormy night. You approach a mysterious alley...");//Start

var myName = prompt("What is your name?", "");//Setting my string variable
var myAge = prompt("What is your age?","");// Setting number variable
var hearNoise = confirm("Are you scared " + myName + " ?");//Setting my boolean variable
var myPrompt = prompt("What are you afraid of?", "");//setting my string variable

function yourFears(args) {// function for procedure
    if (args==="monsters" || args==="zombies" || args==="vampires") {//argument conditional
        console.log("Monsters arent real?");//output 1
    } else {
        console.log("No worries then. Mwahahahaha...");// output 2
    }
}

yourFears(myPrompt);// invoking procedure

var walkDownAlley = confirm("Are you ready to proceed through the alley?");// confirm boolean

function theWalk(args, args2) {//boolean function
    var readyToWalk = args; //local variable 1
    var stepsToTake = args2;//local variable 2 
    while (stepsToTake >= 0){// while loop set up
        if (stepsToTake === 0) {//comparison
            console.log("You have no more steps to take! You have survived the journey through the creepy alley.");//output 1
        }else{
            console.log("You have "+ stepsToTake + " steps to take.");//output 2
        }
        stepsToTake--;//part of while loop
    }
    return true;// return boolean
}



function howManyMonsters(args) {//number function
    var numMonsters = args;// local variable 1
    for(numMonsters; numMonsters > 0; numMonsters--){// for loop set up
        var remainingMonsters = numMonsters - 1; // math
        console.log("You must fight your way out of the alley! You punch a monster in the face. Now you have " + remainingMonsters + " left to defeat.");// output 1
    }
    return 0;// return number
}


function theString(args, args2) {// string function
    var name= args;// local variable 1
    var fearType= args2;//local variable 2
    return (name + " the " + fearType + " are in your head! Concentrate on escaping your mind...");// return string, with concatonation
}

var reachedSafety = theWalk(walkDownAlley, 20);// return value 1

var monstersLeft = howManyMonsters(5);// return value 2

console.log(theString(myName, myPrompt));//returning and outputting return value 3

console.log("It is " + reachedSafety + " that you have reached safety, with " + monstersLeft + " monsters left.");//finish and output value 1 and 2