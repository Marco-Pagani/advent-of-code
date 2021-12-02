export function computePosition(movements) {
  let horizontal = 0
  let vertical = 0
  movements.forEach(motion => {
    let [direction, distance] = motion.split(' ')
    distance = parseInt(distance)
    direction === 'forward'
      ? horizontal += distance
      : (direction === 'down'
        ? vertical += distance
        : vertical -= distance
      )
  })
  return horizontal * vertical
}

export function computeAimedPosition(movements) {
  let horizontal = 0
  let vertical = 0
  let aim = 0
  movements.forEach(motion => {
    let [direction, distance] = motion.split(' ')
    distance = parseInt(distance)
    if (direction === 'forward') {
      horizontal += distance
      vertical += (distance * aim)
    }
    else if (direction === 'down') aim += distance
    else aim -= distance
  })
  return horizontal * vertical
}