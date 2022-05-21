const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
var title = document.getElementById("status");
const body = document.getElementsByTagName("body");

// var round = 1;

buttonsArray = document.getElementsByClassName("button")

const buttons = [red, green, blue, yellow]


//function to light up a button on click
const active = (button) => {
    button.classList.add("active");
    setTimeout( () => {
        button.classList.remove("active");
    },90)
}

//function that changes class to selected when highlited by the game
const select = (button) => {
    button.classList.add("select");
    setTimeout( () => {
        button.classList.remove("select");
    },90)
}

//function that returns a random button
const getButton = () => {
    const buttons = [red, green, blue, yellow]
    return buttons[parseInt(Math.random()*buttons.length)]
}

const flash = async (list) => {//function to flash the order array2

    //playing the correct audio
    if (list[list.length-1] == red) {
        playAudio("../assets/sounds/red.mp3")
    } else if (list[list.length-1] == green) {
        playAudio("../assets/sounds/green.mp3")
    } else if (list[list.length-1] == blue) {
        playAudio("../assets/sounds/blue.mp3")
    } else if (list[list.length-1] == yellow) {
        playAudio("../assets/sounds/yellow.mp3")
    }
    select(list[list.length-1]); // flash last button added to the order
    await new Promise(r => setTimeout(r, 350));
    playerTurn = true;//player can choose after finishing flashes
}

//add new button to the order for the next round
const addNextButton = () => {
    order.push(getButton());
}

//function that runs the new order, called from click event if temp.length is empty
const runNextRound = async (list) => {  //function that runs the next round with the added button
    console.log(order);
    title.innerHTML = "Level "+order.length; // printing round
    await new Promise(r => setTimeout(r, 500)); //give user few ms before running the next round
    playerTurn = false;
    flash(list);
    

}

//function that executes upon clicking a button
const buttonClick = (button) => { //onclick function for the buttons clicked
    if (playerTurn) {

        

        active(button)
        nextElement = temp.shift();
        if (nextElement != button) {
            lose();
        } else {

            //playing the correct audio
            if (button == red) {
                playAudio("../assets/sounds/red.mp3")
            } else if (button == green) {
                playAudio("../assets/sounds/green.mp3")
            } else if (button == blue) {
                playAudio("../assets/sounds/blue.mp3")
            } else if (button == yellow) {
                playAudio("../assets/sounds/yellow.mp3")
            }

            if (temp.length == 0) {
                addNextButton();
                runNextRound(order);
                temp = [...order] // make new order as temp to compare with it next round
            }

        }
    }
}

//a function that play an audio track given a path (helper function for onClick())
function playAudio(url) {
    new Audio(url).play();
  }

//a function that is executed when the user loses
const lose = () => {

    //play youlose sound
    playAudio("../assets/sounds/wrong.mp3")

    //flash background red when you lose
    body[0].classList.add("lose");
    setTimeout( () => {
        body[0].classList.remove("lose");
    },150)

    title.innerHTML = "Game Over, Press Any Key to Restart";
    playerTurn = false; //player can't click buttons during lost screen
    canReset();

}


var order; // setting intial order
var temp; // temp to compare on click
var playerTurn = false;

//-----------------------------------------------------------------------
//--------------------FUNCTION THAT RUNS THE GAME------------------------
const runGame = () => {
    cannotReset()
    order = [getButton()]
    temp = [...order]
    
    runNextRound(order)
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

//add keypress event listener to the document
const cannotReset = () => {
    document.removeEventListener("keypress", runGame);
}

//remove keypress event listener to the document
const canReset = () => {
    document.addEventListener("keypress", runGame);
}

canReset() //