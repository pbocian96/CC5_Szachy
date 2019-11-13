import Piece from './Piece';
import board from '../board';

class Knight extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'knight';
        this.display = `<i class="fas fa-chess-knight ${side}"></i>`;//fontawesome knight
    }
    findLegalMoves() {

        const possibleMoves = [];
        for (let i = 1; i <= 2; i++) {
            for (let xSign = -1; xSign <= 1; xSign+=2) {
                for (let ySign = -1; ySign <= 1; ySign+=2) {
                    let xVector = i*xSign;
                    let yVector = (3-i)*ySign;
                    this.x + xVector >= 0 && this.x + xVector <= 7 && this.y + yVector >= 0 && this.y + yVector <=7 && possibleMoves.push(`${this.x + xVector},${this.y + yVector}`);
                }
            }
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
        board[newX][newY] = new Knight(parseInt(newX), parseInt(newY), this.side);
        this.x = newX;
        this.y = newY;
        document.getElementById(id).innerHTML = this.display;
    }
}

export default Knight;