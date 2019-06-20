const grid = document.querySelector("#container");
var columns = 0;

function drawGrid(size){
    for (var i = 0; i < size**2 ;i++){
        const square = document.createElement('div');
        square.className = "square";
        grid.appendChild(square);
    }
}

const squares = document.querySelectorAll(".square");

squares.forEach(element =>{
    element.addEventListener("mouseover", (e) =>{
        element.classList.add("selected");
    });
});

const reset = document.querySelector("#reset");
reset.addEventListener('click', (e) =>{
    squares.forEach(element => {
        element.classList.remove("selected");
    });
});

const size = document.querySelector("#size");
reset.addEventListener('click', (e) =>{
    columns =  prompt("How many columns would you like?");
    drawGrid(columns);
});