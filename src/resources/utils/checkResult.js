//Check winner, update wins, losses, draws
export default function checkResults(computerHand, playerHand) {
  if(computerHand === playerHand) {
    return 'draw';
  } 
  if(computerHand === 0 && playerHand === 1) {
    return 'Paper covers Rock- You win!';
  }
  if(computerHand === 0 && playerHand === 2) {
    return 'Rock crushes Scissors- You lose!';
  }
  if(computerHand === 1 && playerHand === 2) {
    return 'Scissors cuts Paper- You win!';
  }
  if(computerHand === 1 && playerHand === 0) {
    return 'Paper covers Rock- You lose!';
  }
  if(computerHand === 2 && playerHand === 1) {
    return 'Scissors cuts paper- You lose!';
  }
  else if(computerHand === 2 && playerHand === 0) {
    return 'Rock crushes Scissors- You win!';
  }
}
