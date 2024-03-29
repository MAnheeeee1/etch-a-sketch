//Store the html elemnt in a variable
const gridContainer = document.querySelector(".grid-container");
const buttonChangeGrid = document.querySelector(".change-grid");
const buttonClearGrid = document.querySelector(".clear-grid");
const buttonEraseGrid = document.querySelector(".erase-grid");
let butttonGridContainer = document.querySelector(".grid-container");
let rbgColours = ["red", "green", "blue"];

let gridSize = 10;
//Add a eventlistner on the button, to change grid
buttonChangeGrid.addEventListener("click", () =>{

    let userGridSize = prompt("To what size do you want to change the grid to?");
    gridSize = parseInt(userGridSize);
    butttonGridContainer.innerHTML = "";
    creatGrid(gridSize);
})
buttonClearGrid.addEventListener("click", () =>{
    butttonGridContainer.innerHTML = "";
    creatGrid(gridSize);
})
buttonEraseGrid.addEventListener("click", () =>{
    alert("Hello");
})

//Initial grid
creatGrid(gridSize);
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
                let randomNumber = Math.round(Math.random() * 3);
                console.log(randomNumber);
                gridCellElement.style.backgroundColor = rbgColours[randomNumber];
            })
            gridRowElement.appendChild(gridCellElement);
        }
    }
}