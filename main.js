import { countDescends, countDescendsWindow } from "./modules/day1-depth.js"
import depths from './data/depths.js'
import { computePosition, computeAimedPosition } from "./modules/day2-movement.js"
import movements from "./data/movement.js"

//console.log(countDescendsWindow(depths))
console.log(computeAimedPosition(movements))