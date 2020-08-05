import React from 'react';
import PropTypes from 'prop-types';
import { usePlayerHand, useComputerHand, useDispatch } from '../../hooks/Context';

const ScoreBoard = ({ wins, losses, draws }) => {
  const playerHand = usePlayerHand();
  const computerHand = useComputerHand();
  const dispatch = useDispatch();

  return (
    <>
      <dl>
        <dt>Wins:</dt>
        <dd>{wins}</dd>

        <dt>Losses:</dt>
        <dd>{losses}</dd>

        <dt>Draws:</dt>
        <dd>{draws}</dd>
      </dl>
      <section>
        <button onClick={(useComputerHand())}>Play</button>
      </section>
    </>
  );
};

ScoreBoard.propTypes = {
  wins: PropTypes.number.isRequired,
  losses: PropTypes.number.isRequired,
  draws: PropTypes.number.isRequired
};

export default ScoreBoard;
