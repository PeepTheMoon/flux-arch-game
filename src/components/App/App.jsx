import React from 'react';
import PlayerHand from './hand/player/PlayerHand';
import { usePlayerHand } from '../../hooks/Context';


export default function App() {
  const playerHand = usePlayerHand();
  return <PlayerHand playerHand={playerHand} />;
}
