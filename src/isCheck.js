import board from "./board";
function isCheck (color) {
    for(let x = 0; x<=7; x++){
        for(let y = 0; y<=7; y++){
            if(board[x][y]!=undefined && board[x][y].side!=color){
                var legalMoves = board[x][y].findLegalMoves();
                for(let i = 0; i<legalMoves.length; i++){
                    if(board[legalMoves[i][0]][legalMoves[i][2]]!=undefined && board[legalMoves[i][0]][legalMoves[i][2]].side == color && board[legalMoves[i][0]][legalMoves[i][2]].name == 'king'){
                        return true;
                    }
                }
            }
        }
    }    
    return false;
}

export {isCheck};