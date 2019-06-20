const grid = document.querySelector("#container");

for (var i =0; i < 16;i++){
    const square = document.createElement('div');
    square.className = "square ";
    square.id = i;
    grid.appendChild(square);
}
