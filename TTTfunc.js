const statusText = document.querySelector(".status");
let currentPlayer = "X"; //remembers whos turn it is
statusText.textContent = "X's turn";

const cells = document.querySelectorAll(".cell");  //gets all cells

cells.forEach(cell => {  //loop over cells
    cell.addEventListener("click", () => { //when this cell is clicked
        if (cell.textContent !== "") 
            return;  //dont overwrite

        cell.textContent = currentPlayer; //place X

        if (cell.textContent == 'X'){
            currentPlayer = "O";
        }else{
            currentPlayer = "X";
        }
            statusText.textContent = currentPlayer + "'s turn";
        

    });
});
