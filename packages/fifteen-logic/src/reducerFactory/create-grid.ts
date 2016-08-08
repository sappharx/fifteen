import { List, Range } from 'immutable'

import { Grid } from './grid'

export default function createGrid(gridSize: number): Grid {
  return {
    board: createRandomizedArray(gridSize),
    size: gridSize
  }
}

function createRandomizedArray(gridSize: number): List<number> {
  let availableNumbers: List<number> = List<number>(Range(1, gridSize ** 2))
  let randomArray: List<number> = List<number>()

  while (availableNumbers.size > 0) {
    const index: number = getRandomIntInclusive(0, availableNumbers.size - 1)
    const value: number = availableNumbers.get(index)
    availableNumbers = availableNumbers.delete(index)

    randomArray = randomArray.push(value)
  }

  randomArray = randomArray.push(0)

  return (gridSize % 2 === 0 && isPathologicalArray(randomArray))
    ? createRandomizedArray(gridSize)
    : randomArray
}

function getRandomIntInclusive(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function isPathologicalArray(array: List<number>): boolean {
  for (let i: number = 0, j: number = array.size - 1; j > 0; ++i, --j) {
    if (array[i] !== j) {
      return false
    }
  }

  return true
}
