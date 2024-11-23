import useBoard from '../../hooks/useBoard';
import './style.css';

const Board = ({cols}) => {
    const {board, getHeaderText, playerClick, resetGame} = useBoard(cols);
  return (
    <div className='board-container'>
        <div className='board-header'>
            <h2>{getHeaderText()}</h2>
            <button onClick={resetGame}>Reset</button>
        </div>
        <div className="grid" style={{"--cols": cols}}>
            {
                board.map((box, idx) => {
                    return (
                        <button key={idx} className="box" onClick={() => playerClick(idx)} disabled={board[idx]}>{box}</button>
                    );
                })
            }
        </div>
    </div>
    )
}

export default Board