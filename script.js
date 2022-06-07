(function renderGameBoard() {
    const container = document.querySelector('.container');
    const table = document.createElement('table');
    container.append(table);

    for (let i = 1; i <= 8; i++) {
        const trs = document.createElement('tr');
        table.append(trs);
    }

    const trs = document.querySelectorAll('tr');

    trs.forEach(tr => {
        for (let i = 1; i <= 8; i++) {
            const td = document.createElement('td');
            tr.append(td);
        }
    });
    
})();

(function gameBoardSetups() {
    const rows = document.querySelectorAll('tr');
    /*Set up playable cells and non playable cells*/
    rows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.childNodes.forEach((cells, index) => {
                if (index % 2 === 0) {
                    cells.dataset.playable = false;
                } else {
                    cells.dataset.playable = true;
                }
            });
        } else {
            row.childNodes.forEach((cells, index) => {
                if (index % 2 === 0) {
                    cells.dataset.playable = true;
                } else {
                    cells.dataset.playable = false;
                } 
            });
        }
    });

    /*Set Up starting cells*/
    for (let i = 0; i <= 2; i++) {
        rows[i].childNodes.forEach((cells, index) => {
            if (cells.dataset.playable === 'true') {
                cells.classList.add('starting-cells');
            }
        });
    }
    for (let i = 5; i <= 7; i++) {
        rows[i].childNodes.forEach((cells, index) => {
            if (cells.dataset.playable === 'true') {
                cells.classList.add('starting-cells');
            }
        });
    }

})();

const Pieces = (position, selected, status) => {
    const move = () => {
        return '';
    };
    const capturePiece = () => {
        return '';
    };
};

function generatePieces(array) {
    for (let i = 1; i <= 12; i++) {
        const piece = Pieces('1', 'false', 'active');
        array.push(piece);
    }
}

const Players = (name) => {
    const pieces = [];

    return {
        name,
        pieces
    }
};

(function renderPiecesOnBoard() {
    const startingCells = document.querySelectorAll('.starting-cells');
    startingCells.forEach((cell, index) => {
        if (index >= 0 && index <= 11) {
            const piece = document.createElement('span');
            piece.classList.add('firstPlayerPiece');
            cell.append(piece);

        } else {
            const piece = document.createElement('span');
            piece.classList.add('secondPlayerPiece');
            cell.append(piece);
        }
    });
})();

(function start() { 
    const player1 = Players('Player 1');
    const player2 = Players('Player 2');
    generatePieces(player1.pieces);
    generatePieces(player2.pieces);


})();