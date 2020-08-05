import React, { useEffect } from 'react';
import { 
  usePlayerHand, 
  useComputerHand, 
  // useDispatch, 
  useScoreBoard 
} from '../../hooks/Context';
import PlayerHand from '../../components/App/hand/player/PlayerHand';
import ComputerHand from '../../components/App/hand/computer/ComputerHand';
import ScoreBoard from '../score-board/ScoreBoard';
import styles from './GameBoard.css';

const GameBoard = () => {
  const playerHand = usePlayerHand();
  const computerHand = useComputerHand();
  const scoreBoard = useScoreBoard();
  // const dispatch = useDispatch();

  useEffect(() => {

  });

  return (
    <section className={styles.GameBoard}>
      <ComputerHand computerHand={computerHand} />
      <ScoreBoard scoreBoard={scoreBoard} />
      <PlayerHand playerHand={playerHand} />
    </section>
  );
};

export default GameBoard;
