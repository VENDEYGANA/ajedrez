const boardElement = document.getElementById('chess-board');
const squares = [];
let selectedPiece = null;

const initialBoardSetup = [
    'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',
    'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
    'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'
];

const pieceSymbols = {
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};

function createBoard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.dataset.index = i;
        square.addEventListener('click', onSquareClick);
        boardElement.appendChild(square);
        squares.push(square);
    }
    updateBoard();
}

function updateBoard() {
    initialBoardSetup.forEach((piece, index) => {
        squares[index].textContent = pieceSymbols[piece] || '';
        squares[index].dataset.piece = piece;
    });
}

function onSquareClick(event) {
    const square = event.target;
    const piece = square.dataset.piece;

    if (selectedPiece) {
        movePiece(square);
    } else if (piece) {
        selectPiece(square);
    }
}

function selectPiece(square) {
    selectedPiece = square;
    square.classList.add('selected');
}

function movePiece(targetSquare) {
    if (selectedPiece !== targetSquare) {
        targetSquare.dataset.piece = selectedPiece.dataset.piece;
        targetSquare.textContent = selectedPiece.textContent;
        selectedPiece.dataset.piece = '';
        selectedPiece.textContent = '';
    }
    selectedPiece.classList.remove('selected');
    selectedPiece = null;
}

createBoard();