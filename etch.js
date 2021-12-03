
let container = document.getElementById("container");

const origSize = 16;
let size = origSize;

makeGrid(size);


document.getElementById("clear").addEventListener("click", clearGrid);

document.getElementById("submit").addEventListener("click", setSize);

function newColor(z){
   z.target.style.backgroundColor = 'black';
}

function setSize() {
   size = document.getElementById("prompt").value;
   clearGrid();
   makeGrid(size);
}

function makeGrid(size){
   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
   container.style.gridTemplateRows = `repeat(${size}, 1fr)`

   for (let i = 0; i < size * size; i++) {
      const gridElements = document.createElement('div');
      gridElements.addEventListener('mouseover', newColor);
      container.appendChild(gridElements);
   }
}

function clearGrid() {
   container.innerHTML = '';
   makeGrid(size);
}
