let whoseMove = new String('white');
function changePlayer () {
    whoseMove = whoseMove == 'black' ? 'white' : 'black';
}

export {whoseMove, changePlayer};
