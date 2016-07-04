type Grid = Array<Array<number>>

// QUESTION: do we want '0' to always be in the bottom right corner??
export default function createGrid(gridSize: number): Grid {
  let randomArray = createRandomizedArray(gridSize)
  let gridArray: Grid = []

  for (let i = 0; i < gridSize; ++i) {
    const start = i * gridSize
    const end = (i + 1) * gridSize
    const array = randomArray.slice(start, end)

    gridArray = gridArray.concat([array])
  }

  return gridArray
}

function createRandomizedArray(gridSize: number): Array<number> {
  let availableNumbers = createBasicArray(gridSize)
  let randomArray: Array<number> = []

  while (availableNumbers.length > 0) {
    const randomIndex = getRandomIntInclusive(0, availableNumbers.length - 1)
    const value = availableNumbers.splice(randomIndex, 1)

    randomArray = randomArray.concat(value)
  }

  if (gridSize % 2 === 0) {
    randomArray = ensureNonPathologicalArray(randomArray)
  }

  return randomArray
}

function createBasicArray(size: number): Array<number> {
  let numbersRemaining: number = size * size
  let array: Array<number> = []

  while (numbersRemaining > 0) {
    array = array.concat(--numbersRemaining)
  }

  return array
}

function getRandomIntInclusive(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function ensureNonPathologicalArray(array: Array<number>): Array<number> {
  for (let i = 0, j = array.length - 1; j > 0; ++i, --j) {
    if (array[i] !== j) {
      return array
    }
  }

  return createRandomizedArray(Math.sqrt(array.length))
}
