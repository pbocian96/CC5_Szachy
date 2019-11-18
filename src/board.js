import Pawn from './pieces/pawn';
import Knight from './pieces/knight';
import Bishop from './pieces/bishop';
import King from './pieces/king';
import Queen from './pieces/queen';
import Rook from './pieces/rook';
const board = new Array(8);
for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
}

//białe pionki
for (let i = 0; i < 8; i++){
    let pawn=new Pawn(6,i,'white');
    board[pawn.x][pawn.y] = pawn;
}
//czarne pionki
for (let i=0; i < 8; i++){
    let pawn=new Pawn(1,i,'black');
    board[pawn.x][pawn.y] = pawn;
}
//konik
let knight = new Knight(7, 1, 'white');
board[knight.x][knight.y] = knight;
knight = new Knight(7, 6, 'white');
board[knight.x][knight.y] = knight;
knight = new Knight(0, 1, 'black');
board[knight.x][knight.y] = knight;
knight = new Knight(0, 6, 'black');
board[knight.x][knight.y] = knight;
//wieża
let rook = new Rook(7, 0, 'white');
board[rook.x][rook.y] = rook;
rook = new Rook(7, 7, 'white');
board[rook.x][rook.y] = rook;
rook = new Rook(0, 0, 'black');
board[rook.x][rook.y] = rook;
rook = new Rook(0, 7, 'black');
board[rook.x][rook.y] = rook;
//biskup
let bishop = new Bishop(7, 2, 'white');
board[bishop.x][bishop.y] = bishop;
bishop = new Bishop(7, 5, 'white');
board[bishop.x][bishop.y] = bishop;
bishop = new Bishop(0, 2, 'black');
board[bishop.x][bishop.y] = bishop;
bishop = new Bishop(0, 5, 'black');
board[bishop.x][bishop.y] = bishop;
//królowa
let queen= new Queen(7, 3, 'white');
board[queen.x][queen.y] = queen;
queen = new Queen(0, 3, 'black');
board[queen.x][queen.y] = queen;
//król
let king= new King(7, 4, 'white');
board[king.x][king.y] = king;
king = new King(0, 4, 'black');
board[king.x][king.y] = king;

export default board; 