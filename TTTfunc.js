const statusText = document.querySelector(".status");
statusText.textContent = "X's turn";


const cells = document.querySelectorAll(".cell");  //gets all cells
cells.forEach(cell => {  //goes thru every cell one at a time
    cell.addEventListener("click", () => { //when this cell is clicked
        if (cell.textContent !== "") return;  //dont overwrite
        cell.textContent = "X"; //place X
        statusText.textContent = "X placed";  //UI feedback

    });
});

