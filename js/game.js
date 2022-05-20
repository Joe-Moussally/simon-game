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

    //player's turn to play
    playerTurn = true;
}

//add new button to the order for the next round
const addNextButton = () => {
    order.push(getButton());
}

const runNextRound = (list) => {//function that runs the next round with the added button
    playerTurn = false;
    flash(list);
    playerTurn = true;

}

const buttonClick = (button) => {
    if (playerTurn) {

        nextElement = temp.shift();
        if (nextElement != button) {
            alert("YOU LOSTTTT")
        } else {
            if (temp.length == 0) {
                addNextButton();
                runNextRound(order);
                temp = [...order]
            }
        }
    }
}
const order = [getButton()];
var temp = [...order];
const checkOrder = () => {
    
    while (temp.length != 0) {
        var nextElement = temp.shift()
        console.log(nextElement)
    }


    
}





const runGame = () => {
    var lost = false;
    
    runNextRound(order)




    

}

runGame()