import { getElements } from "./Functions/GetElements.js"
import { increment } from "./Functions/Increment.js"
import { decrement } from "./Functions/Decrement.js"


let {incrementButton, decrementButton} = getElements()

incrementButton.addEventListener ('click', increment)
decrementButton.addEventListener ('click', decrement)