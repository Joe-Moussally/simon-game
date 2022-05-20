const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
var title = document.getElementById("status");

// var round = 1;

buttonsArray = document.getElementsByClassName("button")

const buttons = [red, green, blue, yellow]


//function to light up a button
const active = (button) => {
    button.classList.add("active");
    setTimeout( () => {
        button.classList.remove("active");
    },150)
}

//function that changes class to selected when highlited by the game
const select = (button) => {
    button.classList.add("select");
    setTimeout( () => {
        button.classList.remove("select");
    },150)
}

//function that returns a random button
const getButton = () => {
    const buttons = [red, green, blue, yellow]
    return buttons[parseInt(Math.random()*buttons.length)]
}

const flash = async (list) => {//function to flash the order array2


        select(list[list.length-1]); // flash last button added to the order
        await new Promise(r => setTimeout(r, 650));

    playerTurn = true;//player can choose after finishing flashes
}

//add new button to the order for the next round
const addNextButton = () => {
    order.push(getButton());
}

//function that runs the new order, called from click event if temp.length is empty
const runNextRound = async (list) => {  //function that runs the next round with the added button
    title.innerHTML = "Level "+order.length; // printing round
    await new Promise(r => setTimeout(r, 650)); //give user few ms before running the next round
    playerTurn = false;
    flash(list);
    

}
const buttonClick = (button) => {
    if (playerTurn) {
        active(button)
        console.log("CLICKED")
        nextElement = temp.shift();
        if (nextElement != button) {
            alert("YOU LOSTTTT");
            lost = true;
            // lose()
        } else {
            if (temp.length == 0) {
                addNextButton();
                runNextRound(order);
                temp = [...order] // make new order as temp to compare with it next round
            }
        }
    }
}

const order = [getButton()]; // setting intial order
var temp = [...order]; // temp to compare on click
var playerTurn = false;

const runGame = () => {
    runNextRound(order)
}

document.addEventListener("keypress", runGame);