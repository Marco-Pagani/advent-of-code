export function countDescends(depths) {
  let [previous, ...rest] = depths
  console.log(previous, rest)
  let increases = 0
  rest.forEach(depth => {
    if (depth > previous) increases++
    console.log(`${depth} (${increases})`)
    previous = depth
  })
  return increases
}

export function countDescendsWindow(depths) {
  let previousSum = depths[0] + depths[1] + depths[2]
  let increases = 0
  for(let i = 1; i < depths.length - 2; i++) {
    const currentSum = (depths[i] + depths[i+1] + depths[i+2])
    if (currentSum > previousSum) increases++
    previousSum = currentSum
  }
  return increases
}