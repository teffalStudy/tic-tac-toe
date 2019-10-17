class TicTacToe {
    constructor() {
        this.current_player = 'x';
        this.counter = 0;
        this.fields = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.current_player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!(this.fields[rowIndex][columnIndex] === 'x'|| this.fields[rowIndex][columnIndex] === 'o')) {
            this.fields[rowIndex][columnIndex] = this.current_player;
            this.current_player = (this.current_player === 'x') ? 'o' : 'x';
            this.counter++;
        }
    }

    isFinished() {
        return Boolean(this.getWinner()) || this.isDraw();
    }

    getWinner() {
        for (let i=0; i<3; i++) {
            if (this.fields[i][0] === this.fields[i][1] && this.fields[i][0] === this.fields[i][2]) return this.fields[i][0];
            if (this.fields[0][i] === this.fields[1][i] && this.fields[0][i] === this.fields[2][i]) return this.fields[0][i];
        }

        if (this.fields[0][0] === this.fields[1][1] && this.fields[0][0] === this.fields[2][2]) return this.fields[0][0];
        if (this.fields[0][2] === this.fields[1][1] && this.fields[0][2] === this.fields[2][0]) return this.fields[2][0];

        return null;
    }

    noMoreTurns() {
        return this.counter === 9;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.fields[rowIndex][colIndex] === 'x' ||
            this.fields[rowIndex][colIndex] === 'o') {
            return this.fields[rowIndex][colIndex];
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;
