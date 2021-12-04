function getCommonDigits(data, tie) {
  const dataLength = data.length
  const datumLength = data[0].length
  let positionSum = new Array(datumLength).fill(0);
  data.forEach(datum => {
    for (let i = 0; i < datumLength; i++) {
      positionSum[i] += parseInt(datum.substr(i, 1))
    }
  })
  
  positionSum = positionSum.map(digit => {
    if (digit == (dataLength / 2)){
      return tie
    }
    else if (digit > (dataLength / 2))
      return 1
    else
      return 0
  })
  return positionSum
}

export function runPowerDiagnostic(data) {
  const commonDigits = getCommonDigits(data, 1)
  let gamma = '', epsilon = ''
  commonDigits.forEach(digit => {
    if (digit) {
      gamma += '1'
      epsilon += '0'
    } else {
      gamma += '0'
      epsilon += '1'
    }
  })
  return parseInt(gamma, 2) * parseInt(epsilon, 2)
}

export function runLifeSupportDiagnostic(data) {
  const commonDigits = getCommonDigits(data, 1)
  let oxygenRating = data, co2Rating = data
  for (let i = 0; i < commonDigits.length; i++){
    if (oxygenRating.length > 1)
      oxygenRating = oxygenRating.filter(e => e.substr(i, 1) == getCommonDigits(oxygenRating, 1)[i].toString())
    if (co2Rating.length > 1)
      co2Rating = co2Rating.filter(e => e.substr(i, 1) != getCommonDigits(co2Rating, 1)[i].toString())
    // console.log(oxygenRating, co2Rating)
  }
  console.log(parseInt(oxygenRating, 2), parseInt(co2Rating, 2))
  return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2)
}