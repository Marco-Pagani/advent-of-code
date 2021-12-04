import { countDescends, countDescendsWindow } from "./modules/day1-depth.js"
import depths from './data/depths.js'
import { computePosition, computeAimedPosition } from "./modules/day2-movement.js"
import movements from "./data/movement.js"

import { runPowerDiagnostic, runLifeSupportDiagnostic } from './modules/day3-diagnostic.js'
import { diagnosticExample, diagnosticData } from './data/diagnostic.js'

//console.log(countDescendsWindow(depths))
console.log(runLifeSupportDiagnostic(diagnosticData))