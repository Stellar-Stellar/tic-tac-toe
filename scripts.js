const gameBoard = (function (){
    const board = ["topLeft", "middleLeft", "bottomLeft", "topMiddle", "middle", "bottomMiddle", "topRight", "middleRight", "bottomRight"];
    console.log(board)
    return {board}
})();

const gameRules = (function (){
    let player1Selection;
    let player2Selection;

    function playRound() {
    alert("Welcome to Tic-Tac-Toe! Enter the space you want to fill in. Player 1 is X and Player 2 is O. Let's get started!")
    player1Selection = prompt("Player 1's Turn");
    player2Selection = prompt("Player 2's Turn");
    for (i = 0; i < gameBoard.board.length; i++) {
        console.log(gameBoard.board[i])
        if (player1Selection.localeCompare(gameBoard.board[i], undefined, { sensitivity: "accent" }) === 0) {
            gameBoard.board[i] = "X";
        }
        
        if (player2Selection.localeCompare(gameBoard.board[i], undefined, { sensitivity: "accent" }) === 0) {
            gameBoard.board[i] = "O";
        } //*
    }
    }

    playRound()
    console.log(gameBoard.board)
})();

function getPlayer(name) {
    
}

//Three objects: game, gameboard, players. Make sure to put each bit of logic in an appropriate spot.

//*Check if a spot isn't taken already by using an "else-if" that checks if the spot is marked as X or O. Might be able to use an "OR" to lump both selections










