import { Images } from '../resources/Images';

export const initialState = {
  playerHand: Images[0],
  computerHand: Images[1],
  scoreBoard: {
    wins: 0,
    losses: 0,
    draws: 0
  }
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_PLAYER_HAND':
      return { 
        ...state, 
        playerHand: { 
          ...state.playerHand, 
          ...Images[action.payload] 
        } 
      };
    case 'UPDATE_SCOREBOARD':
      return { 
        ...state,
        scoreBoard: {
          ...state.scoreBoard,
          wins: state.scoreBoard.wins + action.payload,
          losses: state.scoreBoard.losses + action.payload,
          draws: state.scoreBoard.draws + action.payload
        }
      };
    
    default: 
      return state;
  }
}
