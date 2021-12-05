import * as f from 'fs'

function markBoard(board, calledNumber) {
  return board.map(number => (number === calledNumber) ? '*' : number)
}

function checkBoard(b) {
  //console.log(b, b[0] + b[1] + b[2] + b[3] + b[4])
  for(let i = 0; i < 5; i++)
    if (b[i] + b[i+5] + b[i+10] + b[i+15] + b[i+20] === '*****') return true
  for(let i = 0; i <= 20; i+=5)
    if (b[i] + b[i+1] + b[i+2] + b[i+3] + b[i+4] === '*****') return true
  return false
}

function computeWinValue(board, number) {
  return number * board.filter(n => n !== '*').reduce((acc, curr) => acc += parseInt(curr), 0)
}

function parseGame(input) {
  try {
    const data = f.readFileSync(input, 'utf8').split('\n')
    const calledNumbers = data[0].split(',')
    let boards = []
    for (let i = 2; i < data.length; i += 6) {
      let board = []
      for (let j = i; j <= i+4; j++) {
        board.push(data[j].split(' '))
      }
      boards.push( board.flat().filter(e => e !== '' && e !== ' ') )
    }
    return [calledNumbers, boards]
  } catch (err) {
    console.error(err)
  }
}

export function computeWinningBoard(input) {
  let [numbers, boards] = parseGame(input)
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    //console.log(number)
    boards = boards.map(board => {
      return markBoard(board, number)
    })
    let winningBoards = boards.filter(board => checkBoard(board))
    if (winningBoards.length == 1) return computeWinValue(winningBoards[0], number)
    
  }
}

export function computeLastBoard(input) {
  let [numbers, boards] = parseGame(input)
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    boards = boards.map(board => {
      return markBoard(board, number)
    })
    if (boards.length > 1) boards = boards.filter(board => !checkBoard(board))
    else if (checkBoard(boards[0])) return computeWinValue(boards[0], number)
  }
}