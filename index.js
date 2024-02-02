//Store the html elemnt in a variable
const gridContainer = document.querySelector(".grid-container");
const buttonChangeGrid = document.querySelector("button");
let butttonGridContainer = document.querySelector(".grid-container");

let gridSize = 10;
//Add a eventlistner on the button, to change grid
buttonChangeGrid.addEventListener("click", () =>{

    let userGridSize = prompt("To what size do you want to change the grid to?");
    gridSize = parseInt(userGridSize);
    butttonGridContainer.innerHTML = "";
    creatGrid(gridSize);
})
//Main program to creat the grid layout
function creatGrid (gridSize){
    for (let i = 0; i < gridSize; i++) {
        const gridRowElement = document.createElement("div");
        gridRowElement.classList.add("grid-rows");
        gridContainer.appendChild(gridRowElement);
    
        // Add 6 more divs to each grid row
        for (let j = 0; j < gridSize; j++) {
            const gridCellElement = document.createElement("div");
            gridCellElement.classList.add("grid-cell");
            //Makes the grid-cell change color
            gridCellElement.addEventListener("mouseover", () =>{
                gridCellElement.style.backgroundColor = "black";
            })
            gridRowElement.appendChild(gridCellElement);
        }
    }
}



