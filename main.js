let color = "black";

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);

    })
});

function createBoard(size){
    let sketchborder = document.querySelector(".sketch-border");

    sketchborder.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchborder.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        sketchborder.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Choose a board size!")
    let message = document.querySelector("#message");
    if (input == ""){
        message.innerHTML = "Please enter a number";
    }
    else if (input < 0 || input > 100){
        message.innerHTML = "Enter a number between 1 and 100";
    }
    else{
        message.innerHTML = "Have fun!";
        return input;
    }
}

function colorDiv() {
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }

    else if (color == 'white') {
        this.style.backgroundColor = 'white'
    }
    else {
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}