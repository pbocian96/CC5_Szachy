import Piece from './Piece';
import board from '../board';

class King extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'king';
        this.display = `<i class="fas fa-chess-king ${side}"></i>`;//fontawesome king
    }
    findLegalMoves() {

        const possibleMoves = [];
        
        this.x-1 >=0  &&                possibleMoves.push(`${this.x - 1},${this.y}`);
        this.x-1 >=0  && this.y+1<=7 && possibleMoves.push(`${this.x - 1},${this.y + 1}`);
        this.x-1 >=0  && this.y-1>=0 && possibleMoves.push(`${this.x - 1},${this.y - 1}`);
        this.y-1 >=0  &&                possibleMoves.push(`${this.x},${this.y - 1}`);
        this.y+1 <=7  &&                possibleMoves.push(`${this.x},${this.y + 1}`);
        this.x+1 <=7  &&                possibleMoves.push(`${this.x + 1},${this.y}`);
        this.x+1 <=7  && this.y+1<=7 && possibleMoves.push(`${this.x + 1},${this.y + 1}`);
        this.x+1 <=7  && this.y-1>=0 && possibleMoves.push(`${this.x + 1},${this.y - 1}`);

        return possibleMoves;
    }

    move(id) {
        const newX = id[0];
        const newY = id[2];
        //clearing previous place
        board[this.x][this.y] = undefined;
        document.getElementById(`${this.x},${this.y}`).innerHTML = "";
        //setting new
        board[newX][newY] = new King(parseInt(newX), parseInt(newY), this.side);
        this.x = newX;
        this.y = newY;
        document.getElementById(id).innerHTML = this.display;
    }
}

export default King;
