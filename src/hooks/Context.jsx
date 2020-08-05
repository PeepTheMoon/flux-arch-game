import React, { useContext } from 'react';

export const Context = React.createContext();

export const useState = () => {
  const { state } = useContext(Context);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(Context);
  return dispatch;
};

export const usePlayerHand = () => {
  const { playerHand } = useState();
  return playerHand;
};

export const useComputerHand = () => {
  const { computerHand } = useState();
  return computerHand;
};

export const useScoreBoard = () => {
  const { scoreBoard } = useState();
  return scoreBoard;
};
