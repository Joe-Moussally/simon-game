const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
var playerTurn = false;
var round = 1;

buttonsArray = document.getElementsByClassName("button")

const buttons = [red, green, blue, yellow]


//function to light up a button
const active = (button) => {
    button.classList.add("active");
    setTimeout( () => {
        button.classList.remove("active");
    },500)
}

//function that returns a random button
const getButton = () => {
    const buttons = [red, green, blue, yellow]
    return buttons[parseInt(Math.random()*buttons.length)]
}

//function for clicked button
const buttonClick = (button) => {
    if (playerTurn) { //player can't choose untill the turn begins
        // console.log(button)
    }
    
}

const maze = async () => {

    for (let button of order) {
        active(button);
        await new Promise(r => setTimeout(r, 1000));
    }

    //player's turn to play
    playerTurn = true;
}

const order = [getButton()];
maze()