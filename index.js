//Store the html elemnt in a variable
const gridContainer = document.querySelector(".grid-container");
const buttonChangeGrid = document.querySelector("button");

//Add a eventlistner on the button, to change grid

//Main program to creat the grid layout
for (let i = 0; i < 20; i++) {
    const gridRowElement = document.createElement("div");
    gridRowElement.classList.add("grid-rows");
    gridContainer.appendChild(gridRowElement);

    // Add 6 more divs to each grid row
    for (let j = 0; j < 20; j++) {
        const gridCellElement = document.createElement("div");
        gridCellElement.classList.add("grid-cell");
        //Makes the grid-cell change color
        gridCellElement.addEventListener("mouseover", () =>{
            gridCellElement.style.backgroundColor = "black";
        })
        gridRowElement.appendChild(gridCellElement);
    }
}



