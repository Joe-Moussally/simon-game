const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
var playerTurn = false;
// var round = 1;

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

const flash = async (list) => {//function to flash the order array2

    for (let button of list) {
        active(button);
        await new Promise(r => setTimeout(r, 1000));
    }
    playerTurn = true;//player can choose after finishing flashes
}

//add new button to the order for the next round
const addNextButton = () => {
    order.push(getButton());
}

const runNextRound = async (list) => {//function that runs the next round with the added button
    await new Promise(r => setTimeout(r, 800)); //give user few ms before running the next round
    playerTurn = false;
    console.log("False")
    flash(list);
    

}

const buttonClick = (button) => {
    if (playerTurn) {
        console.log("CLICKED")
        nextElement = temp.shift();
        if (nextElement != button) {
            alert("YOU LOSTTTT");
            lost = true;
        } else {
            if (temp.length == 0) {
                addNextButton();
                runNextRound(order);
                temp = [...order] // make new order as temp to compare with it next round
            }
        }
    }
}

const order = [getButton()];//setting intial order
var temp = [...order];//temp to compare on click
var playerTurn = false;

const runGame = () => {
    // var lost = false;
    runNextRound(order)
    // if (lost == true) {
    //     alert("LOST FROM RUN GAME")
    // }
}

runGame()