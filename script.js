const grid = document.querySelector("#container");

function drawGrid(size){
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    } 

    grid.style.gridTemplateColumns = "1fr ".repeat(size);
    grid.style.gridTemplateRows = "1fr ".repeat(size);
    
    for (var i = 0; i < size**2 ;i++){
        const square = document.createElement('div');
        square.className = "square";
        grid.appendChild(square);
    }
    onHover();
}
drawGrid(4);

function onHover(){
    window.squares = document.querySelectorAll(".square");
    squares.forEach(element =>{
        element.addEventListener("mouseover", (e) =>{
            element.classList.add("selected");
        });
    }); 
}

const reset = document.querySelector("#reset");
reset.addEventListener('click', (e) =>{
    squares.forEach(element => {
        element.classList.remove("selected");
    });
});

const size = document.querySelector("#size");
size.addEventListener('click', (e) =>{
    drawGrid(prompt("How many columns would you like?"));
});