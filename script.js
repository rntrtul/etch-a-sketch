const grid = document.querySelector("#container");
var burshState = 0;

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
    addHoverFunction();
}

drawGrid(16);

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

function addHoverFunction(){
    window.squares = document.querySelectorAll(".square");
    squares.forEach(element =>{
        element.addEventListener("mouseover", (e) =>{
            if(burshState == 0){
             element.classList.add("selected")
            }else{
                var color = randomColor();
                element.style = "background-color:" + color +
                                "; border: " + color;
        }
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

const rand = document.querySelector("#random");
rand.addEventListener('click', (e)=>{
    burshState ==0 ? burshState =1 : burshState = 0;
});
