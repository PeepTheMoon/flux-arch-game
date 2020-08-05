import { Images } from '../resources/Images';

export const initialState = {
  playerHand: Images[0],
  
  // {
  //   name: 'paper',
  //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRolJqqHMjpTKMX1xJ5ytee8332VT_vLI4PoAsurW4zcQQrE8Nd&usqp=CAU'
  // },
  computerHand: Images[1],
  // {
  //   name:'scissors',
  //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Smc-mBG8N1nvW50LNWTUk6ytzk7jxORSuGodh3bQhc2Y2r2z&usqp=CAU'
  // },
  scoreBoard: {
    wins: 0,
    losses: 0,
    draws: 0
  }
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_PLAYER_HAND':
      return { ...state, playerHand: { ...state.playerHand, ...Images[action.payload] } };
    
    
    default: 
      return state;
  }
}
