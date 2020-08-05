//Generate a random throw for the computer

export default function getRandomThrow(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
