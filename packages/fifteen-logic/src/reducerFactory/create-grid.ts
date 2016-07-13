import Immutable = require('immutable')

// QUESTION: do we want '0' to always be in the bottom right corner??
export default function createGrid(gridSize: number): Immutable.List<number> {
  return createRandomizedArray(gridSize)
}

function createRandomizedArray(gridSize: number): Immutable.List<number> {
  let availableNumbers: Immutable.List<number> = createBasicArray(gridSize)
  let randomArray: Immutable.List<number> = Immutable.List<number>()

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

function createBasicArray(size: number): Immutable.List<number> {
  let numbersRemaining: number = size * size
  let array: Immutable.List<number> = Immutable.List<number>()

  while (numbersRemaining > 1) {
    array = array.push(--numbersRemaining)
  }

  return array
}

function getRandomIntInclusive(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function isPathologicalArray(array: Immutable.List<number>): boolean {
  for (let i: number = 0, j: number = array.size - 1; j > 0; ++i, --j) {
    if (array[i] !== j) {
      return false
    }
  }

  return true
}

// FOR REFERENCE: split array into an array of arrays
// let gridArray: Grid = []
// for (let i: number = 0; i < gridSize; ++i) {
//   const start: number = i * gridSize
//   const end: number = (i + 1) * gridSize
//   const array: Array<number> = randomArray.slice(start, end)
//   gridArray = gridArray.concat([array])
// }
