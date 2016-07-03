export default function createGrid(size:number): Array<Array<number>> {
  let availableNumbers = createBasicArray(size)
  let randomArray: Array<number> = []
  

  while (availableNumbers.length > 0) {
    const randomIndex = getRandomIntInclusive(0, availableNumbers.length - 1)
    const value = availableNumbers.splice(randomIndex, 1)
    randomArray.push(value[0])
  }

  function createGridArray(size:number) {
    let gridArray: Array<Array<number>> = []
    let count: number = size

    while (count > 0) {
      const array = randomArray.splice(0, size)
      gridArray.push(array)
      count--
    }

    return gridArray
  }
  
  return createGridArray(size)
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBasicArray(size:number): Array<number> {
  let length:number = size * size
  let array: Array<number> = []
  while (length > 0) {
    array.push(--length)
  }

  return array
}
