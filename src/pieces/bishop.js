import Piece from './Piece';
import board from '../board';

class Bishop extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'bishop';
        this.display = `<i class="fas fa-chess-bishop ${side}"></i>`;//fontawesome bishop
    }
    findLegalMoves() {

        const possibleMoves = [];

        let hasFreeRoute1 = true;
        let hasFreeRoute2 = true;
        let hasFreeRoute3 = true;
        let hasFreeRoute4 = true;

        for (let i = 1; i <= 7; i++){
            if(this.x + i <= 7 && this.y + i <= 7 && hasFreeRoute1){
                possibleMoves.push(`${this.x + i},${this.y + i}`);
                if(hasFreeRoute1 && board[this.x+i][this.y+i] != undefined)
                    hasFreeRoute1 = false;
            }
            if(this.x - i >= 0 && this.y - i >= 0 && hasFreeRoute2){
                possibleMoves.push(`${this.x - i},${this.y - i}`);
                if(hasFreeRoute2 && board[this.x-i][this.y-i] != undefined)
                    hasFreeRoute2 = false;
            }
            if(this.x + i <= 7 && this.y - i >= 0 && hasFreeRoute3){
                possibleMoves.push(`${this.x + i},${this.y - i}`);
                if(hasFreeRoute3 && board[this.x+i][this.y-i] != undefined)
                    hasFreeRoute3 = false;
            }
            if(this.x - i >= 0 && this.y + i <= 7 && hasFreeRoute4){
                possibleMoves.push(`${this.x - i},${this.y + i}`);
                if(hasFreeRoute4 && board[this.x-i][this.y+i] != undefined)
                    hasFreeRoute4 = false;
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
        board[newX][newY] = new Bishop(parseInt(newX), parseInt(newY), this.side);
        this.x = newX;
        this.y = newY;
        document.getElementById(id).innerHTML = this.display;
    }
}

export default Bishop;