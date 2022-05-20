const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");

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

const buttonClick = (button) => {
    console.log(button)
}

const maze = async () => {
    for (let button of order) {
        active(button);
        await new Promise(r => setTimeout(r, 1000));
    }
}

const order = [getButton(),getButton(),getButton(),getButton()];

maze()