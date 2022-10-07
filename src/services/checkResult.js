const getLines = (board, type) => {
  let wrongLines = new Set()

  for (let i = 0; i < 9; i++) {
    let dict = {}

    for (let j = 0; j < 9; j++) {
      let key
      if (type === 'horizontal') key = board[i][j].value
      else key = board[j][i].value

      if (key === 0) continue

      if (Object.hasOwnProperty.call(dict, key)) {
        dict[key] += 1
        if (dict[key] > 1) {
          wrongLines.add(i)
          break
        }
      } else dict[key] = 1
    }
  }
  return wrongLines
}

const isValid = (board, x0, y0) => {
  let dict = {}

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let key = board[x0 + i][y0 + j].value
      if (key === 0) continue

      if (Object.hasOwnProperty.call(dict, key)) {
        dict[key] += 1
        if (dict[key] > 1) {
          return false
        }
      } else dict[key] = 1
    }
  }
  return true
}

const getWrongBoxes = board => {
  let wrongBoxes = new Set()
  let boxValues = {
    0: { x: 0, y: 0 },
    1: { x: 0, y: 3 },
    2: { x: 0, y: 6 },
    3: { x: 3, y: 0 },
    4: { x: 3, y: 3 },
    5: { x: 3, y: 6 },
    6: { x: 6, y: 0 },
    7: { x: 6, y: 3 },
    8: { x: 6, y: 6 },
  }

  for (let box = 0; box < 9; box++) {
    let x0 = boxValues[box].x
    let y0 = boxValues[box].y

    if (!isValid(board, x0, y0)) {
      wrongBoxes.add(box)
    }
  }

  return wrongBoxes
}

const getBoxNumber = (x, y) => {
  let x0 = Math.floor(x / 3)
  let y0 = Math.floor(y / 3)
  let BoxNumber = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ][x0][y0]
  return BoxNumber
}

const checkResult = board => {
  let wrongHorizontal = getLines(board, 'horizontal')
  let wrongVertical = getLines(board, 'vertical')
  let wrongBoxes = getWrongBoxes(board)

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (
        wrongHorizontal.has(i) ||
        wrongVertical.has(j) ||
        wrongBoxes.has(getBoxNumber(i, j))
      ) {
        board[i][j].isValid = false
      } else {
        board[i][j].isValid = true
      }
    }
  }
}

export default checkResult
