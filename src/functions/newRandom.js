import { nanoid } from 'nanoid';
import randomNumber from './randomNumber';

function newRandomDie() {
  return {
    id: nanoid(),
    value: randomNumber(6),
    isHeld: false,
  };
}

function newRandomDice() {
  return Array(10)
    .fill(null)
    .map(() => newRandomDie());
}

export { newRandomDie, newRandomDice };
