const grid = document.querySelector("#container");
var burshState = 0;
var size = 16;

function drawGrid(){
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
    addHoverFunction();
}

drawGrid(size);

function brushColor(state) {
    if (state == 0){
        return "black";
    }else {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        return "rgb(" + x + "," + y + "," + z + ")";
    }
}

function addHoverFunction(){
    window.squares = document.querySelectorAll(".square");
    squares.forEach(element =>{
        element.addEventListener("mouseover", (e) =>{
            var color = brushColor(burshState);
            element.style = "background-color:" + color + "; border: " + color;
        });
    }); 
}

const reset = document.querySelector("#reset");
reset.addEventListener('click', (e) =>{
    drawGrid(size);
});

const changeSize = document.querySelector("#size");
changeSize.addEventListener('click', (e) =>{
    size = prompt("How many columns would you like?")
    if(size <=128){
        drawGrid(size);
    }    
});

const rand = document.querySelector("#random");
rand.addEventListener('click', (e)=>{
    if (burshState == 0){
        burshState = 1;
        rand.textContent = "Black";
    }else{
        burshState = 0;
        rand.textContent = "Colours";
    }
    
});
