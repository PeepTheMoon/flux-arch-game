import Images from '../resources/Images';

export const initialState = {
  playerHand: {
    image: Images[0]
  },
  computerHand: {
    image: Images[1]
  },
  scoreBoard: {
    wins: 0,
    losses: 0,
    draws: 0
  }

};

export default function reducer(state, action) {
  switch(action.type) {
    default: 
      return state;
  }
}
