import React, { useEffect } from 'react';
import { useDispatch, usePlayerHand } from '../../../../hooks/Context';

const PlayerChoices = () => {
  const dispatch = useDispatch();
  const playerHand = usePlayerHand();

  const handleChange = ({ target }) => {
    dispatch({ type: 'SET_PLAYER_HAND', payload: target.value });
  };

  useEffect(() => {
    //update playerHand state based on radio selection
    dispatch(playerHand);
  }), [playerHand];

  return (
    <section>
      <input type="radio" value="0" checked={playerHand.name === 'rock'} onChange={handleChange} />
      <label>Rock</label>

      <input type="radio" value="1" checked={playerHand.name === 'paper'} onChange={handleChange} />
      <label>Paper</label>

      <input type="radio" value="2" checked={playerHand.name === 'scissors'} onChange={handleChange} />
      <label>Scissors</label>
    </section>
  );
};

export default PlayerChoices;
