import board from './board';
import {isCheck} from './isCheck';
//import changePlayer from './changePlayer';
import {whoseMove, changePlayer} from './whoseMove';


const touched = (e) => {
    const x = e.currentTarget.id[0];
    const y = e.currentTarget.id[2];
    if (!board[x][y] || board[x][y].side!=whoseMove) {
        return
    }
    const possibleMoves = board[x][y].findLegalMoves();
    for (let el of possibleMoves) {
        document.getElementById(el).className += `possibleMove`;
        document.getElementById(el).addEventListener('click', (e) => {
            board[x][y].move(e.currentTarget.id);
            console.log('');
            console.log('');
            let iswhitecheck = isCheck('white');
            console.log('returned' + iswhitecheck);
            let isblackcheck = isCheck('black');
            console.log('returned' + isblackcheck);
            changePlayer();
            for (let x = 0; x < board.length; x++) {
                for (let y = 0; y < board[x].length; y++) {
                    document.getElementById(`${x},${y}`).className = document.getElementById(`${x},${y}`).className.replace(`possibleMove`, '');

                    //TODO: rozwiązać tematykę event listenerów sprytniej, przenosząc każdy do osobnego pliku
                    let old_element = document.getElementById(`${x},${y}`);
                    let new_element = old_element.cloneNode(true);
                    old_element.parentNode.replaceChild(new_element, old_element);

                    // document.getElementById(`${x},${y}`).removeEventListener('click');
                    document.getElementById(`${x},${y}`).addEventListener('click', (e) => { touched(e) });
                }
            }

        })
    }

}

export default touched;