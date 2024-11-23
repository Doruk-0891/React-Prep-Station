import { useState } from "react";

export const getFixedSizeArr = (cols) => {
    return Array.from({length: cols*cols});
}

const useBoard = (cols) => {
    const [board, setBoard] = useState(getFixedSizeArr(cols));
    const [isXTurn, setIsXTurn] = useState(true);

    const WINNING_CONDITION = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    const getWinner = () => {
        for (let i=0;i<WINNING_CONDITION.length;i++) {
            const [a, b, c] = WINNING_CONDITION[i];
            if (
                board[a] && board[a] === board[b] && board[a] === board[c]
            ) {
                return board[a];
            }
        }
        return null;
    }

    const getHeaderText = () => {
        const winner = getWinner();
        if (winner) {
            return `${winner} is Winner 🎉`;
        } else if (!board.includes(undefined)) {
            return "It's a draw.";
        } else {
            return `${isXTurn ? 'X turn' : 'O turn'}`; 
        }
    }

    const playerClick = (index) => {
        if (getWinner() || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = `${isXTurn ? 'X' : 'O'}`;

        setBoard(newBoard);
        setIsXTurn(!isXTurn);
    }

    const resetGame = () => {
        setBoard(getFixedSizeArr(cols));
        setIsXTurn(true);
    }


    return {board, getHeaderText, playerClick, resetGame};
}

export default useBoard;