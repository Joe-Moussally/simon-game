const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");

const buttons = [red, green, blue, yellow]



const active = (button) => {
    button.classList.add("active");
    setTimeout( () => {
        button.classList.remove("active");
    },500)
}



const maze = async () => {
    for (let button of buttons) {
        active(button);
        await new Promise(r => setTimeout(r, 1000));
    }
}

maze()