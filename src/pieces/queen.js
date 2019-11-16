import Piece from './Piece';
import board from '../board';

class Queen extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'queen';
        this.display = `<i class="fas fa-chess-queen ${side}"></i>`;//fontawesome queen
    }
    findLegalMoves() {

        const possibleMoves = [];
        
        for (let i = 1; i <= 7; i++){
            if(this.x - i >= 0)
                possibleMoves.push(`${this.x - i},${this.y}`)
            if(this.x + i <= 7)
                possibleMoves.push(`${this.x + i},${this.y}`)
            if(this.y - i >= 0)
                possibleMoves.push(`${this.x},${this.y - i}`)
            if(this.y + i <= 7)
                possibleMoves.push(`${this.x},${this.y + i}`)
            if(this.x + i <= 7 && this.y + i <= 7)
                possibleMoves.push(`${this.x + i},${this.y + i}`)
            if(this.x - i >= 0 && this.y - i >= 0)
                possibleMoves.push(`${this.x - i},${this.y - i}`)
            if(this.x + i <= 7 && this.y - i >= 0)
                possibleMoves.push(`${this.x + i},${this.y - i}`)
            if(this.x - i >= 0 && this.y + i <= 7)
                possibleMoves.push(`${this.x - i},${this.y + i}`)
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
        board[newX][newY] = new Queen(parseInt(newX), parseInt(newY), this.side);
        this.x = newX;
        this.y = newY;
        document.getElementById(id).innerHTML = this.display;
    }
}

export default Queen;