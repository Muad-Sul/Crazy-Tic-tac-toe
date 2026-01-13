const statusText = document.querySelector(".status");
let currentPlayer = "X"; //remembers whos turn it is
statusText.textContent = "X's turn";

const cells = document.querySelectorAll(".cell");  //gets all cells

function checkWin(){
    const values = [];
    cells.forEach(cell => values.push(cell.textContent));

    const winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const )
    
}



cells.forEach(cell => {  //loop over cells (click handler)
    
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
