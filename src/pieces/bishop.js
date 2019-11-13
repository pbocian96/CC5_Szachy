import Piece from './Piece';

class Bishop extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'bishop';
        this.display = `<i class="fas fa-chess-bishop ${side}"></i>`;//fontawesome bishop
    }
    findLegalMoves() {

        const possibleMoves = [];

        {
        for (let i = 1; i <= 7; i++){
            if(this.x + i <= 7 && this.y + i <= 7)
                possibleMoves.push(`${this.x + i},${this.y + i}`)
            if(this.x - i >= 0 && this.y - i >= 0)
                possibleMoves.push(`${this.x - i},${this.y - i}`)
            if(this.x + i <= 7 && this.y - i >= 0)
                possibleMoves.push(`${this.x + i},${this.y - i}`)
            if(this.x - i >= 0 && this.y + i <= 7)
                possibleMoves.push(`${this.x - i},${this.y + i}`)
            }
        }
        

        return possibleMoves;
    }
}

export default Bishop;