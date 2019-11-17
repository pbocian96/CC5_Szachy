import Piece from './Piece';
import board from '../board';
import Queen from './queen';

class Pawn extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'pawn';
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }

  findLegalMoves() {
    const possibleMoves = [];
    if (this.side == 'white') {
      if (this.x==6){
		this.x - 1 >=0 && board[this.x-1][this.y] == undefined && possibleMoves.push(`${this.x - 1},${this.y}`); 
        this.x - 2 >=0 && board[this.x-1][this.y] == undefined && board[this.x-1][this.y] == undefined && possibleMoves.push(`${this.x - 2},${this.y}`);    
      }
      else{
        this.x - 1 >= 0 && board[this.x-1][this.y] == undefined && possibleMoves.push(`${this.x - 1},${this.y}`);}
    }

    if (this.side == 'black') {
      if (this.x==1){
        this.x + 1 <=7 && board[this.x+1][this.y] == undefined possibleMoves.push(`${this.x + 1},${this.y}`);
        this.x + 2 <=7 && board[this.x+1][this.y] == undefined && board[this.x+2][this.y] == undefined && possibleMoves.push(`${this.x + 2},${this.y}`);
      }
      else{
        this.x + 1 <= 7 && board[this.x+1][this.y] == undefined && possibleMoves.push(`${this.x + 1},${this.y}`);}
    }
    return possibleMoves;
  }

  move(id) {
    const newX = id[0];
    const newY = id[2];
    //clearing previous place
    board[this.x][this.y] = undefined;
    document.getElementById(`${this.x},${this.y}`).innerHTML = "";
    //setting new
    board[newX][newY] = new Pawn(parseInt(newX), parseInt(newY), this.side);
    this.x = newX;
    this.y = newY;
    document.getElementById(id).innerHTML = this.display;
  }


  promote() {
   }
     
  enPassant(){}

}

export default Pawn;

